const title = 'New Title'
const isVisible = ()=> Math.random() > 0.5


const teamplate= `
${isVisible()?'<p>Visible</p>':' '}
<h1 id='demo' style="color:red">${title}</h1>
`
console.log(teamplate)


/*      METHODS   */
const str = 'Hello'
console.log(str.startsWith('He'))
console.log(str.startsWith('e'))
console.log(str.endsWith('lo'))
console.log(str.endsWith('l'))

console.log(str.includes('llo'))

console.log(str.repeat(3))

console.log(str.trim())
console.log(str.trimStart())
console.log(str.trimEnd())

console.log(str.padStart(10,1234))
console.log(str.padEnd(8, 'abs'))