const { dialog } = require('electron').remote
const bs = require('browser-sync').create()
const path = require('path')


let button = document.createElement('button')

button.innerText = '浏览并开启'
button.addEventListener('click', function() {
  let folder = dialog.showOpenDialog({
    title: '选中一个文件夹',
    properties: ['openDirectory']
  })[0]

  bs.init({
    files: path.join(folder),
    server: {
      baseDir: folder
    }
  })

  bs.watch(folder + '**/*.css', (ev, file) => {})

})

document.body.appendChild(button)

let stopBtn = document.createElement('button')

stopBtn.innerText = '停止'
stopBtn.addEventListener('click', function() {
  bs.exit()
})
document.body.appendChild(stopBtn)
