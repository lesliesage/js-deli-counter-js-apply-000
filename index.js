/*
function takeANumber (katzDeliLine,name) {
  katzDeliLine.push(name)
  return 'Welcome, ' + name + '. You are number ' + (katzDeliLine.length) + ' in line.'
}

function nowServing (katzDeliLine) {
  var ans = ''
  if (katzDeliLine.length === 0) {
    ans = 'There is nobody waiting to be served!'
  } else {
    ans = 'Currently serving ' + katzDeliLine.shift() + '.'
    }
  return ans
}

function currentLine (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.'
    } else {
  var i = 1
  var line = 'The line is currently: 1. ' + katzDeliLine[0]
  while (i < katzDeliLine.length) {
    line = line.concat(', ' + (i+1) + '. ' + katzDeliLine[i])
    i++
    }
  return line
  }
}
*/











/*
New prompt: 
Built ticket machine concept where they get a ticket number. 
The number is added to the line.
Increment the tickets by 1.
Someone's place in line doesn't match their ticket number. 
*/

function newTicketMachine (line) {
  if(line.length === 0) {
    return 'Line is empty.'
  } else {
    currentLine = []
    var ticketID = 1
    var counter = 1
  }
  }
} 
