function varList(){
    var doc = document
    const self = {
        type: (text, font="none", color="black", size="3px")=> {
            var a = '<font color='
            var b = color
            var c = ' size='
            var d = size
            var t = text
            if(font == "none"){
                doc.write(a+b+c+d+'>'+t+'</font>')
            }
            if(font == "bold" || font == "b"){
                doc.write("<b>"+a+b+c+d+'>'+t+'</font>'+"</b>")
            }
            if(font == "italic" || font == "i"){
                doc.write("<i>"+a+b+c+d+'>'+t+'</font>'+"</i>")
            }
            if(font != "none" && font != "bold" && font != "b" && font != "italic" && font != "i"){
                doc.write(a+b+c+d+'>'+t+'</font>')
            }
        },
        type$: (text$, font="none", color="black")=> {
            var a = '<font color='
            var b = color
            var c = text$
            if(font == "none"){
                doc.writeln(a+b+'>'+c+'</font>')
            }
            if(font == "bold" || font == "b"){
                doc.writeln("<b>"+a+b+'>'+c+'</font>'+"</b>")
            }
            if(font == "italic" || font == "i"){
                doc.writeln("<i>"+a+b+'>'+c+'</font>'+"</i>")
            }
            if(font != "none" && font != "bold" && font != "b" && font != "italic" && font != "i"){
                doc.writeln(a+b+'>'+c+'</font>')
            }
        },
        type$$: (text$$, color)=> {
            var a = '<font color='
            var b = color
            var c = text$$
            doc.write(a+b+'>'+c+'</font>')
        },
        getById: (elementId)=> doc.getElementById(elementId),
        getByClass: (elementClass)=> doc.getElementByClassName(elementClass),
        getByName: (elementName)=> doc.getElementByName(elementName),
        getByTag: (elementTag)=> doc.getElementsByTagName(elementTag),
        element: (selectedElement)=> doc.querySelector(selectedElement),
        open: ()=> doc.open(),
        close: ()=> doc.close(),
        promptYN: (ques = "Yes or No?", y = "Yes", a1 = "true", n = "No", a2 = "false", aE = "Answer With Yes / No", aC = "Prompt Canceled", typeA1 = "text", typeA2 = "text", typeAE = "text", typeAC = "text")=>{
            var q = prompt(ques)
            if(q == y){
                if(typeA1 == "text"){
                    document.write(a1);
                    }
                if(typeA1 == "alert"){
                    alert(a1);
                    }
            }
            if(q == n){
                if(typeA2 == "text"){
                    document.write(a2);
                    }
                if(typeA2 == "alert"){
                    alert(a2);
                    }
            }
            if(q != y && q != n && q != null){
                if(typeAE == "text"){
                    document.write(aE);
                    }
                if(typeAE == "alert"){
                    alert(aE);
                    }
            }
            if(q == null){
                if(typeAC == "text"){
                    document.write(aC);
                    }
                if(typeAC == "alert"){
                    alert(ac);
                    }
            }
        },
        createElement: (element)=> doc.createElement(element),
        addElement: (element)=> doc.body.appendChild(element),
        checkIf: (toCheck, onTrue, onFalse, doFunction)=> {
            if(doFunction == "console" || doFunction == "console.log"){
                if(Boolean(toCheck) === true){
                console.log(onTrue)
                }
                if(Boolean(toCheck) === false){
                console.log(onFalse)
                }
            }
            if(doFunction == "type" || doFunction == "document" || doFunction == "document.write"){
                if(Boolean(toCheck) === true){
                doc.write(onTrue)
                }
                if(Boolean(toCheck) === false){
                doc.write(onFalse)
                }
            }
        },
        randomNum: (maxNum)=> (Math.floor(Math.random() * maxNum) + 1),
        doAt: (element, neoEvent, callback)=> {
            doc.querySelector(element).addEventListener(neoEvent, callback)
        },
    }
    return self
}

var neo = varList();
var type = neo.type
var type$ = neo.type$
var type$$ = neo.type$$
var promptYN = neo.promptYN
var checkIf = neo.checkIf
var $nl = "<br>"
var randomNum = neo.randomNum
var getById = neo.getById
var element = neo.element
var doAt = neo.doAt

function styleList(){
    var doc = document
    const self = {
        screenColor: (color, element = "body")=> {
            doc.querySelector(element).style.backgroundColor = color
        },
        textColor: (element, color)=> {
            doc.querySelector(element).style.color = color
        },
        textFont: (element, font)=> {
            doc.querySelector(element).style.fontFamily = font
        },
        textSize: (element, size)=> {
            doc.querySelector(element).style.fontSize = size
        },
        border: (element, info="0px solid black")=> {
            doc.querySelector(element).style.border = info
        },
        borderColor: (element, color)=> {
            doc.querySelector(element).style.borderColor = color
        },
        sidesRadius: (element, size)=> {
            doc.querySelector(element).style.borderRadius = size
        },
        elementWidth: (element, size)=> {
            doc.querySelector(element).style.width = size
        },
        elementHeight: (element, size)=> {
            doc.querySelector(element).style.height = size
        },
    }
    return self
}

var neoStyle = styleList();
var elementTextColor = neo.elementTextColor