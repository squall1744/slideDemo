let n = 1

init()

setInterval(() => {
  leave(getImg(n)).one('transitionend', e => {
    enter($(e.currentTarget))
  })
  current(getImg(n+1))
  n += 1 
},2000)







/********************************功能模块************************************/

function x(n) {
  n = n % 5
  if(n === 0) {
    n = 5
  }
  return n
}


function init() {
  $('.images img:nth-child(1)').addClass('current').siblings('img').addClass('enter')
}

function enter($node) {
  $node.removeClass('leave current').addClass('enter')
  return $node
}

function leave($node) {
  $node.removeClass('enter current').addClass('leave')
  return $node
}

function current($node) {
  $node.removeClass('enter leave').addClass('current')
  return $node
}

function getImg(n) {
  return $(`.images img:nth-child(${x(n)}`)
}
