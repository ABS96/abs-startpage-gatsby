const settings = {
  clickThreshold: 5,
  lightText: 130,
}

export const loadStats = items => {
  if (typeof chrome !== 'undefined') {
    chrome.storage.local.get('stats', result => {
      if (Object.keys(result).length === 0) {
        let temp = {}
        items.map(category => {
          category.node.elements.map(link => {
            temp[link.label] = 0
          })
        })
        chrome.storage.local.set({ stats: temp })
      }
      chrome.storage.local.get('stats', result => {
        let mostClicks = Object.keys(result.stats).reduce(
          (acc, curr) => (result.stats[curr] > acc ? result.stats[curr] : acc),
          0
        )
        if (mostClicks > settings.clickThreshold) {
          setTimeout(() => {
            items.map(category => {
              category.node.elements.map(link => {
                let value =
                  settings.lightText -
                  result.stats[link.label] / mostClicks * settings.lightText
                let color = `rgb(${value},${value},${value})`
                document.getElementById(escape(link.label)).style.color = color
              })
            })
          }, 100)
        }
      })
    })
  }
}

export const updateStats = label => {
  if (typeof chrome !== 'undefined') {
    chrome.storage.local.get('stats', result => {
      result.stats[label] += 1
      chrome.storage.local.set({ stats: result.stats })
    })
  }
}
