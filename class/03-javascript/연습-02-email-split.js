let email = "codecamp@gmail.com"
// undefined
email.includes("@")
// true
email.split("@")
// (2) ['codecamp', 'gmail.com']
let userMail = email.split("@")[0]
// undefined
userMail
// 'codecamp'
let company = email.split("@")[1]
// undefined
company
// 'gmail.com'
let mask = []
// undefined
mask
// []
mask.push(userMail[0])
// 1
mask.push(userMail[1])
// 2
mask.push(userMail[2])
// 3
mask.push(userMail[3])
// 4
mask
// (4) ['c', 'o', 'd', 'e']
mask.push("*")
// 5
mask.push("*")
// 6
mask.push("*")
// 7
mask.push("*")
// 8
mask
// (8) ['c', 'o', 'd', 'e', '*', '*', '*', '*']
mask.join("")
// 'code****'
mask.join("") + '@' + company
// 'code****@gmail.com'
let result = mask.join("") +"@"+company
// undefined
result
// 'code****@gmail.com'