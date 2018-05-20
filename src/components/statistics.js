const settings = {
  clickThreshold: 10,
  lightText: 130,
}

export const loadStats = items => {
  if (typeof module == 'undefined') {
    if (!localStorage.getItem('stats')) {
      let temp = {}
      items.map(category => {
        category.node.elements.map(link => {
          temp[link.label] = 0
        })
      })
      localStorage.setItem('stats', JSON.stringify(temp))
    }

    const stats = JSON.parse(localStorage.getItem('stats'))
    let mostClicks = Object.keys(stats).reduce(
      (acc, curr) => (stats[curr] > acc ? stats[curr] : acc),
      0
    )

    if (mostClicks > settings.clickThreshold) {
      setTimeout(() => {
        items.map(category => {
          category.node.elements.map(link => {
            let value =
              settings.lightText -
              stats[link.label] / mostClicks * settings.lightText
            let color = `rgb(${value},${value},${value})`
            console.log(escape(link.label))
            document.getElementById(escape(link.label)).style.color = color
          })
        })
      }, 100)
    }
  }
}

export const updateStats = label => {
  if (typeof module == 'undefined') {
    const stats = JSON.parse(localStorage.getItem('stats'))
    stats[label] += 1
    localStorage.setItem('stats', JSON.stringify(stats))
  }
}
