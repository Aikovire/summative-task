namespace SpriteKind {
    export const ANemy = SpriteKind.create()
    export const Coin = SpriteKind.create()
    export const mean = SpriteKind.create()
    export const Orbs = SpriteKind.create()
    export const Bat = SpriteKind.create()
    export const math = SpriteKind.create()
    export const Complete = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bat, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (Dog.y < otherSprite.y) {
        info.changeScoreBy(2)
    } else {
        info.changeLifeBy(-1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Orbs, function (sprite, otherSprite) {
    otherSprite.destroy()
    Bats = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Bat)
    animation.runImageAnimation(
    Bats,
    [img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c b b b b b b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b c b b b c b b b b f . . . . 
        f b 1 f f f 1 b b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `,img`
        . . f f f . . . . . . . . . . . 
        f f f c c . . . . . . . . f f f 
        f f c c . . c c . . . f c b b c 
        f f c 3 c c 3 c c f f b b b c . 
        f f b 3 b c 3 b c f b b c c c . 
        . c b b b b b b c f b c b c c . 
        . c b b b b b b c b b c b b c . 
        c b 1 b b b 1 b b b c c c b c . 
        c b b b b b b b b c c c c c . . 
        f b c b b b c b b b b f c . . . 
        f b 1 f f f 1 b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . c c . . c c . . . . . . . . 
        . . c 3 c c 3 c c c . . . . . . 
        . c b 3 b c 3 b c c c . . . . . 
        . c b b b b b b b b f f . . . . 
        c c b b b b b b b b f f . . . . 
        c b 1 b b b 1 b b c f f f . . . 
        c b b b b b b b b f f f f . . . 
        f b c b b b c b c c b b b . . . 
        f b 1 f f f 1 b f c c c c . . . 
        . f b b b b b b f b b c c . . . 
        c c f b b b b b c c b b c . . . 
        c c c f f f f f f c c b b c . . 
        . c c c . . . . . . c c c c c . 
        . . c c c . . . . . . . c c c c 
        . . . . . . . . . . . . . . . . 
        `,img`
        . f f f . . . . . . . . f f f . 
        f f c . . . . . . . f c b b c . 
        f c c . . . . . . f c b b c . . 
        c f . . . . . . . f b c c c . . 
        c f f . . . . . f f b b c c . . 
        f f f c c . c c f b c b b c . . 
        f f f c c c c c f b c c b c . . 
        . f c 3 c c 3 b c b c c c . . . 
        . c b 3 b c 3 b b c c c c . . . 
        c c b b b b b b b b c c . . . . 
        c b 1 b b b 1 b b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        f b c b b b c b b b b f . . . . 
        . f 1 f f f 1 b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `],
    100,
    true
    )
    Bats.setPosition(Dog.x + 80, Dog.y - 80)
    Bats.follow(Dog, 50)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
function Q2 () {
    Dialog_Mode = true
    game.showLongText("7- -24=", DialogLayout.Bottom)
    story.showPlayerChoices("31", "-17")
    if (story.checkLastAnswer("-17")) {
        info.changeScoreBy(-2)
    } else if (story.checkLastAnswer("31")) {
        info.changeScoreBy(2)
    } else {
    	
    }
    Dialog_Mode = false
    pause(1000)
    Question_number += 1
}
function Q1 () {
    Dialog_Mode = true
    game.showLongText("-6- -7=", DialogLayout.Bottom)
    story.showPlayerChoices("1", "-13")
    if (story.checkLastAnswer("-13")) {
        info.changeScoreBy(-2)
    } else if (story.checkLastAnswer("1")) {
        info.changeScoreBy(2)
    } else {
    	
    }
    Dialog_Mode = false
    pause(1000)
    Question_number += 1
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.cameraShake(2, 100)
    if (Dog.vy == 0) {
        Dog.vy = -155
    }
})
function Q5 () {
    Dialog_Mode = true
    game.showLongText("-2+(-6)=", DialogLayout.Bottom)
    story.showPlayerChoices("-8", "4")
    if (story.checkLastAnswer("4")) {
        info.changeScoreBy(-2)
    } else if (story.checkLastAnswer("-8")) {
        info.changeScoreBy(2)
    } else {
    	
    }
    Dialog_Mode = false
    pause(1000)
    Question_number += 1
}
function Q4 () {
    Dialog_Mode = true
    game.showLongText("-2+(-6)=", DialogLayout.Bottom)
    story.showPlayerChoices("-8", "4")
    if (story.checkLastAnswer("4")) {
        info.changeScoreBy(-2)
    } else if (story.checkLastAnswer("-8")) {
        info.changeScoreBy(2)
    } else {
    	
    }
    Dialog_Mode = false
    pause(1000)
    Question_number += 1
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.math, function (sprite, otherSprite) {
    if (Question_number == 1) {
        Q1()
        otherSprite.setKind(SpriteKind.Complete)
    } else if (Question_number == 2) {
        Q2()
        otherSprite.setKind(SpriteKind.Complete)
    } else if (Question_number == 3) {
        Q3()
        otherSprite.setKind(SpriteKind.Complete)
    } else if (Question_number == 4) {
        Q4()
        otherSprite.setKind(SpriteKind.Complete)
    } else if (Question_number == 5) {
    	
    } else if (Question_number == 6) {
    	
    } else if (Question_number == 7) {
    	
    } else if (Question_number == 8) {
    	
    } else {
    	
    }
})
function Q3 () {
    Dialog_Mode = true
    game.showLongText("17+(-22)=", DialogLayout.Bottom)
    story.showPlayerChoices("-5", "35")
    if (story.checkLastAnswer("35")) {
        info.changeScoreBy(-2)
    } else if (story.checkLastAnswer("-5")) {
        info.changeScoreBy(2)
    } else {
    	
    }
    Dialog_Mode = false
    pause(1000)
    Question_number += 1
}
let Bats: Sprite = null
let Question_number = 0
let Dialog_Mode = false
let _Math: Sprite = null
let Red_Orb: Sprite = null
let Coins: Sprite = null
let Dog: Sprite = null
info.setLife(5)
scene.setBackgroundColor(6)
scene.setBackgroundImage(img`
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddd66dddddddddddddddddddddddddddddddddddddd66dddddddddddddddddddddddddddddddddddddd66dddddddddddddddddddddddddddddddddddddd66dddddddddddddddd
    ddddddddddddddddddddddd6ddddddddddddddddddddddddddddddddddddddd6ddddddddddddddddddddddddddddddddddddddd6ddddddddddddddddddddddddddddddddddddddd6dddddddddddddddd
    ddddddddddddddddddddd6666dddddddddddddddddddddddddddddddddddd6666dddddddddddddddddddddddddddddddddddd6666dddddddddddddddddddddddddddddddddddd6666ddddddddddddddd
    dddddddddddddddddddd66666ddddddddddddddddddddddddddddddddddd66666ddddddddddddddddddddddddddddddddddd66666ddddddddddddddddddddddddddddddddddd66666ddddddddddddddd
    ddddddddddddddddddd6666666ddddddddddddddddddddddddddddddddd6666666ddddddddddddddddddddddddddddddddd6666666ddddddddddddddddddddddddddddddddd6666666dddddddddddddd
    ddddddddddddddddddd66666d6ddddddddddddddddddddddddddddddddd66666d6ddddddddddddddddddddddddddddddddd66666d6ddddddddddddddddddddddddddddddddd66666d6dddddddddddddd
    ddddddddddddbddddddd6666ddddddddddddddddddddddddddddbddddddd6666ddddddddddddddddddddddddddddbddddddd6666ddddddddddddddddddddddddddddbddddddd6666dddddddddddddddd
    ddddddddddddbdddddd6666666ddddddddddddddddddddddddddbdddddd6666666ddddddddddddddddddddddddddbdddddd6666666ddddddddddddddddddddddddddbdddddd6666666dddddddddddddd
    ddddddddddddbddddd66666666ddddddddddddddddddddddddddbddddd66666666ddddddddddddddddddddddddddbddddd66666666ddddddddddddddddddddddddddbddddd66666666dddddddddddddd
    ddddddddddddbdddd66666666666ddddddddddddddddddddddddbdddd66666666666ddddddddddddddddddddddddbdddd66666666666ddddddddddddddddddddddddbdddd66666666666dddddddddddd
    dd66ddddddddbdd6d6666666666666ddddbddddddd66ddddddddbdd6d6666666666666ddddbddddddd66ddddddddbdd6d6666666666666ddddbddddddd66ddddddddbdd6d6666666666666ddddbddddd
    d66666ddddddbdd666666666666666ddddbdddddd66666ddddddbdd666666666666666ddddbdddddd66666ddddddbdd666666666666666ddddbdddddd66666ddddddbdd666666666666666ddddbddddd
    66666666ddddbddd66666666666666ddddbddddd66666666ddddbddd66666666666666ddddbddddd66666666ddddbddd66666666666666ddddbddddd66666666ddddbddd66666666666666ddddbddddd
    666666666ddddbdddd666666666666ddddbddddd666666666ddddbdddd666666666666ddddbddddd666666666ddddbdddd666666666666ddddbddddd666666666ddddbdddd666666666666ddddbddddd
    d66666666dddddbdddd6666666444444dbbdddd3d66666666dddddbdddd6666666444444dbbdddd3d66666666dddddbdddd6666666444444dbbdddd3d66666666dddddbdddd6666666444444dbbdddd3
    d666666666dddddbb6666666444444444bdddd3dd666666666dddddbb6666666444444444bdddd3dd666666666dddddbb6666666444444444bdddd3dd666666666dddddbb6666666444444444bdddd3d
    66666666ddddddddbb66666666446443bbdddddd66666666ddddddddbb66666666446443bbdddddd66666666ddddddddbb66666666446443bbdddddd66666666ddddddddbb66666666446443bbdddddd
    666666666dddddd666b666666646664bb3ddddd6666666666dddddd666b666666646664bb3ddddd6666666666dddddd666b666666646664bb3ddddd6666666666dddddd666b666666646664bb3ddddd6
    6666b66dddddd66666666666666666bbdddddd666666b66dddddd66666666666666666bbdddddd666666b66dddddd66666666666666666bbdddddd666666b66dddddd66666666666666666bbdddddd66
    6666b6666ddddd666666666666666bbddddddd666666b6666ddddd666666666666666bbddddddd666666b6666ddddd666666666666666bbddddddd666666b6666ddddd666666666666666bbddddddd66
    6666b66b66dddddd666644444666666ddddddd666666b66b66dddddd666644444666666ddddddd666666b66b66dddddd666644444666666ddddddd666666b66b66dddddd666644444666666ddddddd66
    6666b66b66ddddd34444444444666666666ddd666666b66b66ddddd34444444444666666666ddd666666b66b66ddddd34444444444666666666ddd666666b66b66ddddd34444444444666666666ddd66
    6666b6b666dddd444444444446644466666ddd666666b6b666dddd444444444446644466666ddd666666b6b666dddd444444444446644466666ddd666666b6b666dddd444444444446644466666ddd66
    6666bbb6446d3334444444444443444666ddddd66666bbb6446d3334444444444443444666ddddd66666bbb6446d3334444444444443444666ddddd66666bbb6446d3334444444444443444666ddddd6
    6666bb6446664444444444444444344466dddd666666bb6446664444444444444444344466dddd666666bb6446664444444444444444344466dddd666666bb6446664444444444444444344466dddd66
    666bb66666444444444444444444466666666666666bb66666444444444444444444466666666666666bb66666444444444444444444466666666666666bb66666444444444444444444466666666666
    66bb666644444444444444446bb666666666b66666bb666644444444444444446bb666666666b66666bb666644444444444444446bb666666666b66666bb666644444444444444446bb666666666b666
    66b6666466664443446443446bb666446666b66666b6666466664443446443446bb666446666b66666b6666466664443446443446bb666446666b66666b6666466664443446443446bb666446666b666
    66b6b66666644464466444666bb666b44666b66666b6b66666644464466444666bb666b44666b66666b6b66666644464466444666bb666b44666b66666b6b66666644464466444666bb666b44666b666
    6bb6b66666646664666664666bb666b66666b6666bb6b66666646664666664666bb666b66666b6666bb6b66666646664666664666bb666b66666b6666bb6b66666646664666664666bb666b66666b666
    6bbbb66666666466644666666bb666b666666b666bbbb66666666466644666666bb666b666666b666bbbb66666666466644666666bb666b666666b666bbbb66666666466644666666bb666b666666b66
    6bbb666666664466446666666bb666b666666b666bbb666666664466446666666bb666b666666b666bbb666666664466446666666bb666b666666b666bbb666666664466446666666bb666b666666b66
    6b666666666646666666b6666bb66b6666666bbb6b666666666646666666b6666bb66b6666666bbb6b666666666646666666b6666bb66b6666666bbb6b666666666646666666b6666bb66b6666666bbb
    bb666666666666666666b6666bbb6b666666666bbb666666666666666666b6666bbb6b666666666bbb666666666666666666b6666bbb6b666666666bbb666666666666666666b6666bbb6b666666666b
    6b666666666666666666b6666bbbb666666666666b666666666666666666b6666bbbb666666666666b666666666666666666b6666bbbb666666666666b666666666666666666b6666bbbb66666666666
    6b666666666666666666b6666bbbb666444666666b666666666666666666b6666bbbb666444666666b666666666666666666b6666bbbb666444666666b666666666666666666b6666bbbb66644466666
    6b444664446666666666b6666bbb6664446666666b444664446666666666b6666bbb6664446666666b444664446666666666b6666bbb6664446666666b444664446666666666b6666bbb666444666666
    44444466444666666666b6666bbb66444664444444444466444666666666b6666bbb66444664444444444466444666666666b6666bbb66444664444444444466444666666666b6666bbb664446644444
    44446666b44466666666b6666bbb66666444444444446666b44466666666b6666bbb66666444444444446666b44466666666b6666bbb66666444444444446666b44466666666b6666bbb666664444444
    44444446b66666666b66b6666bbb66664444444444444446b66666666b66b6666bbb66664444444444444446b66666666b66b6666bbb66664444444444444446b66666666b66b6666bbb666644444444
    44444444446666666b66b6666bbbb6444464444444444444446666666b66b6666bbbb6444464444444444444446666666b66b6666bbbb6444464444444444444446666666b66b6666bbbb64444644444
    44444644446666666b66b6666bbb4444b466446444444644446666666b66b6666bbb4444b466446444444644446666666b66b6666bbb4444b466446444444644446666666b66b6666bbb4444b4664464
    6444666bb6bb66666b66b6666bbbb444b66446666444666bb6bb66666b66b6666bbbb444b66446666444666bb3bb66666b66b6666bbbb444b66446666444666bb3bb66666b66b6666bbbb444b6644666
    66b4666bb6b666666bb6bb666bbbb666bb66666666b4666bb6b666666bb6bb666bbbb666bb66666666b4666bb3b666666bb6bb666bbbb666bb66666666b4666bb3b666666bb6bb666bbbb666bb666666
    66b6666bbbb6666666bbbb666bbbb666bb66666666b6666bbbb6666666bbbb666bbbb666bb66666666b6666bbbb6666666bbbb666bbbb666bb66666666b6666bbbb6666666bbbb666bbbb666bb666666
    66b6666bb6666666666bbb666bbbb666bb66666666b6666bb6666666666bbb666bbbb666bb66666666b6666bb6666666666bbb666bbbb666bb66666666b6666bb6666666666bbb666bbbb666bb666666
    66b6666bb66666666666bbb66bbbb666bb66666666b6666bb66666666666bbb66bbbb666bb66666666b6666bb66666666666bbb66bbbb666bb66666666b6666bb66666666666bbb66bbbb666bb666666
    666b666bb66666666666bbb66bbbb666bb666666666b666bb66666666666bbb66bbbb666bb666666666b666bb66666666666bbb66bbbb666bb666666666b666bb66666666666bbb66bbbb666bb666666
    666bb6bbb6666446444664b66bbbb666bb66b666666bb6bbb6666446444664b66bbbb666bb66b666666bb6bbb6666446444664b66bbbb666bb66b666666bb6bbb6666446444664b66bbbb666bb66b666
    666bbbbbb6664444444444446bbbbb66bb66b666666bbbbbb6664444444444446bbbbb66bb66b666666bbbbbb6664444444444446bbbbb66bb66b666666bbbbbb6664444444444446bbbbb66bb66b666
    6666bbbbb664444444444444bbbbbb6bb66bb6666666bbbbb664444444444444bbbbbb6bb66bb6666666bbbbb664444444444444bbbbbb6bb66bb6666666bbbbb664444444444444bbbbbb6bb66bb666
    66666bbbb666443444444464bbbbbb6bb66b666666666bbbb666443444444464bbbbbb6bb66b666666666bbbb666443444444464bbbbbb6bb66b666666666bbbb666443444444464bbbbbb6bb66b6666
    66666bbb6644664444446466bbbbbb6bb6b6666666666bbb6644664444446466bbbbbb6bb6b6666666666bbb6644664444446466bbbbbb6bb6b6666666666bbb6644664444446466bbbbbb6bb6b66666
    66666bbb6666644664466466bbbbbb6bbb66666666666bbb6666644664466466bbbbbb6bbb66666666666bbb6666644664466466bbbbbb6bbb66666666666bbb6666644664466466bbbbbb6bbb666666
    66666bbb666b6466666666666bbbbbbb6666666666666bbb666b6466666666666bbbbbbb6666666666666bbb666b6466666666666bbbbbbb6666666666666bbb666b6466666666666bbbbbbb66666666
    66666bbb666b6666666666666bbbbbbb6666666666666bbb666b6666666666666bbbbbbb6666666666666bbb666b6666666666666bbbbbbb6666666666666bbb666b6666666666666bbbbbbb66666666
    66666bbb666b6b66666666666bbbbbbb6666666666666bbb666b6b66666666666bbbbbbb6666666666666bbb666b6b66666666666bbbbbbb6666666666666bbb666b6b66666666666bbbbbbb66666666
    66666bbb666b6b66666666666bbbbbb66666666666666bbb666b6b66666666666bbbbbb66666666666666bbb666b6b66666666666bbbbbb66666666666666bbb666b6b66666666666bbbbbb666666666
    66666bbb666b6b66666666666bbbbb666666666666666bbb666b6b66666666666bbbbb666666666666666bbb666b6b66666666666bbbbb666666666666666bbb666b6b66666666666bbbbb6666666666
    66666bb6666bbb66666666666bbbbb666666666666666bb6666bbb66666666666bbbbb666666666666666bb6666bbb66666666666bbbbb666666666666666bb6666bbb66666666666bbbbb6666666666
    66666bb666bbb666666666666bbbbb666666666666666bb666bbb666666666666bbbbb666666666666666bb666bbb666666666666bbbbb666666666666666bb666bbb666666666666bbbbb6666666666
    6666bbb666b666666666dd666bbbbb6d666666666666bbb666b666666666dd666bbbbb6d666666666666bbb666b666666666dd666bbbbb6d666666666666bbb666b666666666dd666bbbbb6d66666666
    6666bbb666b6666666666dd6bbbbbb66dd6666d66666bbb666b6666666666dd6bbbbbb66dd6666d66666bbb666b6666666666dd6bbbbbb66dd6666d66666bbb666b6666666666dd6bbbbbb66dd6666d6
    6666bbb6bbb6666666666666bbbbbbb66d666dd66666bbb6bbb6666666666666bbbbbbb66d666dd66666bbb6bbb6666666666666bbbbbbb66d666dd66666bbb6bbb6666666666666bbbbbbb66d666dd6
    dd66bbbbbb66666666d66666bbbbbbb666666d66dd66bbbbbb66666666d66666bbbbbbb666666d66dd66bbbbbb66666666d66666bbbbbbb666666d66dd66bbbbbb66666666d66666bbbbbbb666666d66
    3dd6bbbbb66dd6666dd6666dbbbbbbbd666666666dd6bbbbb66dd6666dd6666dbbbbbbbd666666666dd6bbbbb66dd6666dd6666dbbbbbbbd666666666dd6bbbbb66dd6666dd6666dbbbbbbbd66666666
    3dddbbbbb666dd66dd66d6ddbbbbbbbd666d66666dddbbbbb666dd66dd66d6ddbbbbbbbd666d66666dddbbbbb666dd66dd66d6ddbbbbbbbd666d66666dddbbbbb666dd66dd66d6ddbbbbbbbd666d6666
    3dddbbb666666666d66dddddbbbbbbbdd6dd66d66dddbbb666666666d66dddddbbbbbbbdd6dd66d66dddbbb666666666d66dddddbbbbbbbdd6dd66d66dddbbb666666666d66dddddbbbbbbbdd6dd66d6
    ddddbbbd66666666666dddddbbbbbbbdddd66dddddddbbbd66666666666dddddbbbbbbbdddd66dddddddbbbd66666666666dddddbbbbbbbdddd66dddddddbbbd66666666666dddddbbbbbbbdddd66ddd
    ddddbbbd666d66ddd66dddddbbbbbbbdddddddddddddbbbd666d66ddd66dddddbbbbbbbdddddddddddddbbbd666d66ddd66dddddbbbbbbbdddddddddddddbbbd666d66ddd66dddddbbbbbbbddddddddd
    ddddbbbd66ddd6dddd6dddddbbbbbbbdddddddddddddbbbd66ddd6dddd6dddddbbbbbbbdddddddddddddbbbd66ddd6dddd6dddddbbbbbbbdddddddddddddbbbd66ddd6dddd6dddddbbbbbbbddddddddd
    ddddbbbdddddddddddddddddbbbbbbbdddddddddddddbbbdddddddddddddddddbbbbbbbdddddddddddddbbbdddddddddddddddddbbbbbbbdddddddddddddbbbdddddddddddddddddbbbbbbbddddddddd
    ddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbddddddddd
    ddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbddddddddd
    ddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbddddddddd
    ddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbddddddddd
    ddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbddddddddd
    ddddbbbb3dddddddddddddddbbbbbbbdddddddddddddbbbb3dddddddddddddddbbbbbbbdddddddddddddbbbb3dddddddddddddddbbbbbbbdddddddddddddbbbb3dddddddddddddddbbbbbbbddddddddd
    ddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbddddddddd
    ddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbddddddddd
    ddddbbbbb3ddddddddddddd3bbbbbbb3ddddddddddddbbbbb3ddddddddddddd3bbbbbbb3ddddddddddddbbbbb3ddddddddddddd3bbbbbbb3ddddddddddddbbbbb3ddddddddddddd3bbbbbbb3dddddddd
    ddddbbbbb3dddddddddddddbbbbbbbb3ddddddddddddbbbbb3dddddddddddddbbbbbbbb3ddddddddddddbbbbb3dddddddddddddbbbbbbbb3ddddddddddddbbbbb3dddddddddddddbbbbbbbb3dddddddd
    ddd3bbbbbbdddddddddddddbbbbbbbbbddddddddddd3bbbbbbdddddddddddddbbbbbbbbbddddddddddd3bbbbbbdddddddddddddbbbbbbbbbddddddddddd3bbbbbbdddddddddddddbbbbbbbbbdddddddd
    ddd3bbbbbbdddddddddddd3bbbbbbbbbddddddddddd3bbbbbbdddddddddddd3bbbbbbbbbddddddddddd3bbbbbbdddddddddddd3bbbbbbbbbddddddddddd3bbbbbbdddddddddddd3bbbbbbbbbdddddddd
    cc3bbbbbbb3dddddddddddbbbbbbbbcccccccccccc3bbbbbbb3dddddddddddbbbbbbbbcccccccccccc3bbbbbbb3dddddddddddbbbbbbbbcccccccccccc3bbbbbbb3dddddddddddbbbbbbbbcccccccccc
    ccccccccbbbddddddddd33bbbcccccccccccccccccccccccbbbddddddddd33bbbcccccccccccccccccccccccbbbddddddddd33bbbcccccccccccccccccccccccbbbddddddddd33bbbccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    `)
Dog = sprites.create(img`
    . . . . f f f f f . . . 
    . . f f e e e e e f . . 
    . f f e e e e e e e f . 
    f f f f e e e e e e e f 
    f f f f f e e e 4 e e f 
    f f f f e e e 4 4 e e f 
    f f f f 4 4 4 4 4 e f f 
    f f 4 e 4 f f 4 4 e f f 
    . f 4 d 4 d d d d f f . 
    . f f f 4 d d b b f . . 
    . . f e e 4 4 4 e f . . 
    . . 4 d d e 1 1 1 f . . 
    . . e d d e 1 1 1 f . . 
    . . f e e f 6 6 6 f . . 
    . . . f f f f f f . . . 
    . . . . f f f . . . . . 
    `, SpriteKind.Player)
animation.runImageAnimation(
Dog,
[img`
    . . . . . . . . . . . . 
    . . . f f f f f f . . . 
    . f f f e e e e e f . . 
    f f f e e e e e e e f . 
    f f f f e e e e e e e f 
    f f f f f e e e 4 e e f 
    f f f f e e e 4 4 e e f 
    f f f f 4 4 4 4 4 e f f 
    f f 4 e 4 f f 4 4 e f . 
    f f 4 d 4 d d d d f . . 
    . f f f 4 d d b b f . . 
    . 4 d d e 4 4 4 e f . . 
    . e d d e 1 1 1 1 f . . 
    . f e e f 6 6 6 6 f f . 
    . f f f f f f f f f f . 
    . . f f . . . f f f . . 
    `,img`
    . . . . . . . . . . . . 
    . . . f f f f f f . . . 
    . f f f e e e e e f . . 
    f f f e e e e e e e f . 
    f f f f e e e e e e e f 
    f f f f f e e e 4 e e f 
    f f f f e e e 4 4 e e f 
    f f f f 4 4 4 4 4 e f f 
    f f 4 e 4 f f 4 4 e f . 
    . f 4 d 4 d d d d f . . 
    . f f f e e d b b f . . 
    . . f 4 d d e 4 e f . . 
    . . f e d d e 1 1 f . . 
    . f f f e e f 6 6 f f . 
    . f f f f f f f f f f . 
    . . f f . . . f f f . . 
    `,img`
    . . . . f f f f f . . . 
    . . f f e e e e e f . . 
    . f f e e e e e e e f . 
    f f f f e e e e e e e f 
    f f f f f e e e 4 e e f 
    f f f f e e e 4 4 e e f 
    f f f f 4 4 4 4 4 e f f 
    f f 4 e 4 f f 4 4 e f f 
    . f 4 d 4 d d d d f f . 
    . f f f 4 d d b b f . . 
    . . f e e 4 4 4 e f . . 
    . . 4 d d e 1 1 1 f . . 
    . . e d d e 1 1 1 f . . 
    . . f e e f 6 6 6 f . . 
    . . . f f f f f f . . . 
    . . . . f f f . . . . . 
    `],
100,
true
)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(Dog)
Dog.ay = 350
for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
    Coins = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 4 4 4 4 4 4 5 f . . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 4 4 4 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Coin)
    animation.runImageAnimation(
    Coins,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 4 4 4 4 4 5 5 f . . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 5 4 4 4 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . f 5 5 4 4 4 5 5 f . . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 4 4 5 5 5 f . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . f 5 5 4 5 5 f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . f 5 4 5 5 5 5 5 f . . . . 
        . . . f 5 4 5 5 5 5 5 f . . . . 
        . . . f 5 4 5 5 5 5 5 f . . . . 
        . . . f 5 4 5 5 5 5 5 f . . . . 
        . . . f 5 4 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f 5 5 4 5 5 f . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 4 5 5 5 f . . . . . 
        . . . . f 5 4 5 5 5 f . . . . . 
        . . . . f 5 4 5 5 5 f . . . . . 
        . . . . f 5 4 5 5 5 f . . . . . 
        . . . . f 5 4 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 4 5 f . . . . . . 
        . . . . . f 5 4 5 f . . . . . . 
        . . . . . f 5 4 5 f . . . . . . 
        . . . . . f 5 4 5 f . . . . . . 
        . . . . . f 5 4 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 4 f . . . . . . . 
        . . . . . . f 4 f . . . . . . . 
        . . . . . . f 4 f . . . . . . . 
        . . . . . . f 4 f . . . . . . . 
        . . . . . . f 4 f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 4 5 f . . . . . . 
        . . . . . f 5 4 5 f . . . . . . 
        . . . . . f 5 4 5 f . . . . . . 
        . . . . . f 5 4 5 f . . . . . . 
        . . . . . f 5 4 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 4 5 5 5 f . . . . . 
        . . . . f 5 4 5 5 5 f . . . . . 
        . . . . f 5 4 5 5 5 f . . . . . 
        . . . . f 5 4 5 5 5 f . . . . . 
        . . . . f 5 4 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . f 5 5 4 5 5 f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . f 5 4 5 5 5 5 5 f . . . . 
        . . . f 5 4 5 5 5 5 5 f . . . . 
        . . . f 5 4 5 5 5 5 5 f . . . . 
        . . . f 5 4 5 5 5 5 5 f . . . . 
        . . . f 5 4 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f 5 5 4 5 5 f . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . f 5 5 4 4 4 5 5 f . . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 4 4 5 5 5 f . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 4 4 4 4 4 5 5 f . . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 5 4 4 4 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    tiles.placeOnTile(Coins, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
    for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
        Red_Orb = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . 4 4 4 5 5 4 4 4 . . . . 
            . . . 3 3 3 3 4 4 4 4 4 4 . . . 
            . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
            . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
            . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
            . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
            . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
            . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
            . . . 4 2 2 2 2 2 2 2 2 4 . . . 
            . . . . 4 4 2 2 2 2 4 4 . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Orbs)
        tiles.placeOnTile(Red_Orb, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
        _Math = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            .........fffff..........
            ........f11111ff........
            .......f11111111f.......
            .......f111111111f......
            ......f1111111111f......
            ......f1111111111f......
            ......f1111111111f......
            ......f1111111111f......
            ......f11f1111111f......
            .....f111111111bf.......
            .....f11111fcfff........
            .....f1f1ffffffff.......
            ......fffffffffff.ff....
            ...........ffffffff.....
            ........f1b1bffffff.....
            ........fbfbffffff......
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.math)
        tiles.placeOnTile(_Math, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
Dialog_Mode = false
Question_number = 1
game.onUpdate(function () {
    Dog.setImage(img`
        . . . . f f f f f . . . 
        . . f f e e e e e f . . 
        . f f e e e e e e e f . 
        f f f f e e e e e e e f 
        f f f f f e e e 4 e e f 
        f f f f e e e 4 4 e e f 
        f f f f 4 4 4 4 4 e f f 
        f f 4 e 4 f f 4 4 e f f 
        . f 4 d 4 d d d d f f . 
        . f f f 4 d d b b f . . 
        . . f e e 4 4 4 e f . . 
        . . 4 d d e 1 1 1 f . . 
        . . e d d e 1 1 1 f . . 
        . . f e e f 6 6 6 f . . 
        . . . f f f f f f . . . 
        . . . . f f f . . . . . 
        `)
    if (Dog.vx < 0) {
        Dog.image.flipX()
    } else if (Dog.x % 2 == 0) {
        animation.runImageAnimation(
        Dog,
        [img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f f e e e e e f . . 
            f f f e e e e e e e f . 
            f f f f e e e e e e e f 
            f f f f f e e e 4 e e f 
            f f f f e e e 4 4 e e f 
            f f f f 4 4 4 4 4 e f f 
            f f 4 e 4 f f 4 4 e f . 
            f f 4 d 4 d d d d f . . 
            . f f f 4 d d b b f . . 
            . 4 d d e 4 4 4 e f . . 
            . e d d e 1 1 1 1 f . . 
            . f e e f 6 6 6 6 f f . 
            . f f f f f f f f f f . 
            . . f f . . . f f f . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f f e e e e e f . . 
            f f f e e e e e e e f . 
            f f f f e e e e e e e f 
            f f f f f e e e 4 e e f 
            f f f f e e e 4 4 e e f 
            f f f f 4 4 4 4 4 e f f 
            f f 4 e 4 f f 4 4 e f . 
            . f 4 d 4 d d d d f . . 
            . f f f e e d b b f . . 
            . . f 4 d d e 4 e f . . 
            . . f e d d e 1 1 f . . 
            . f f f e e f 6 6 f f . 
            . f f f f f f f f f f . 
            . . f f . . . f f f . . 
            `,img`
            . . . . f f f f f . . . 
            . . f f e e e e e f . . 
            . f f e e e e e e e f . 
            f f f f e e e e e e e f 
            f f f f f e e e 4 e e f 
            f f f f e e e 4 4 e e f 
            f f f f 4 4 4 4 4 e f f 
            f f 4 e 4 f f 4 4 e f f 
            . f 4 d 4 d d d d f f . 
            . f f f 4 d d b b f . . 
            . . f e e 4 4 4 e f . . 
            . . 4 d d e 1 1 1 f . . 
            . . e d d e 1 1 1 f . . 
            . . f e e f 6 6 6 f . . 
            . . . f f f f f f . . . 
            . . . . f f f . . . . . 
            `],
        100,
        true
        )
    } else {
    	
    }
})
forever(function () {
    if (Dialog_Mode == false) {
        controller.moveSprite(Dog, 100, 0)
    } else if (Dialog_Mode == true) {
        controller.moveSprite(Dog, 0, 0)
    }
})
