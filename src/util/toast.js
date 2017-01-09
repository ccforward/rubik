class Toast {
  toast (position) {
    let toast = document.createElement('div')

    toast.classList.add('toast')
    toast.classList.add(`toast-${position}`)

    document.body.appendChild(toast)

    return toast
  }

  fire (msg, position = 'bottom', countdown = 3000, fn) {
    let toast = document.querySelector(`.toast-${position}`)

    if (!toast) {
      toast = this.toast(position)
    }

    var content = document.createElement('div')
    content.classList.add('toast-content')
    content.innerHTML = msg

    toast.appendChild(content)
    setTimeout(() => content.classList.add('toast-content-active'), 10)

    setTimeout(() => {
      content.classList.add('toast-content-hide')

      setTimeout(() => {
        content.remove()
        fn && fn()
      }, 300)
    }, countdown)
  }
}

export default new Toast()