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
function Q8 () {
    Dialog_Mode = true
    game.showLongText("24 divided by -6", DialogLayout.Bottom)
    story.showPlayerChoices("-4", "4")
    if (story.checkLastAnswer("4")) {
        info.changeScoreBy(-2)
    } else if (story.checkLastAnswer("-4")) {
        info.changeScoreBy(2)
    } else {
    	
    }
    Dialog_Mode = false
    pause(1000)
    Question_number += 1
}
function Q5 () {
    Dialog_Mode = true
    game.showLongText("-6 x -4=", DialogLayout.Bottom)
    story.showPlayerChoices("-24", "24")
    if (story.checkLastAnswer("-24")) {
        info.changeScoreBy(-2)
    } else if (story.checkLastAnswer("24")) {
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
        Q5()
        otherSprite.setKind(SpriteKind.Complete)
    } else if (Question_number == 6) {
        Q6()
        otherSprite.setKind(SpriteKind.Complete)
    } else if (Question_number == 7) {
        Q7()
        otherSprite.setKind(SpriteKind.Complete)
    } else if (Question_number == 8) {
        Q8()
        otherSprite.setKind(SpriteKind.Complete)
    } else {
    	
    }
})
function Q7 () {
    Dialog_Mode = true
    game.showLongText("6 divided by -3", DialogLayout.Bottom)
    story.showPlayerChoices("2", "-2")
    if (story.checkLastAnswer("2")) {
        info.changeScoreBy(-2)
    } else if (story.checkLastAnswer("-2")) {
        info.changeScoreBy(2)
    } else {
    	
    }
    Dialog_Mode = false
    pause(1000)
    Question_number += 1
}
function Q6 () {
    Dialog_Mode = true
    game.showLongText("7x (-8)=", DialogLayout.Bottom)
    story.showPlayerChoices("56", "-56")
    if (story.checkLastAnswer("56")) {
        info.changeScoreBy(-2)
    } else if (story.checkLastAnswer("-56")) {
        info.changeScoreBy(2)
    } else {
    	
    }
    Dialog_Mode = false
    pause(1000)
    Question_number += 1
}
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
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccee
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccee6
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccce666
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccce6666
    cccccccccccccccccccccccccccccccccccccccccccccccccccccce66666
    cccccccccccccccccccccccccccccccccccccccccccccccccccccce66666
    cccccccccccccccccccccc77cccccccccccccccccccccccccccccee66666
    cccccccccccccccccc7777777cccccccccccc7777777c77777cce7766666
    ccccccccccccccccc7777777777cccccc7777777777777777777e7766666
    cccccccccccccccc777777777777cc777777777777777777777e77766666
    cccccccccccccccc7777777777777777777777777777.77777e777766666
    ccccccccccccccc7777777777777777777777777777.77777e7777766666
    ccccccccccccc77777777777777777777777777777777777e77777766666
    cccccccccccc77777777777777777777777777777777777e777777776666
    cccccccccc777777777777777777777777777777777777e7777777776666
    cccccc777777777eee7777777777777777777777777eee77777777776666
    777777777777777777eeeeeee77777777777ee7ee7ee7777777777776666
    7777777777777777777777777eeeee7eeeee777777777777777777776666
    677777777777777777777777777777777777777777777777777777776666
    677777777777777777777777777777777777777777777777777777776666
    667777777777777777777777777777777777777777777777777777776666
    666777777777777777777777777777777777777777777777777777776666
    666777777777777777777777777777777777777777777777777777776666
    666777777777777777777777777777777777777777777777777777776666
    66667777eee777777eee77766eee77777eee77777eee7777eee777766666
    6666677eeeee7777eeeee7777eeee777eeee7777eeeee77eeee776666666
    6666667eeeee6666eeeee666eeeee666eeeee676eeeee66eeeee66666666
    6666666eeeee6666eeeee666eeeee666eeeee666eeeee66eeeee66666666
    6666666eeeee6666eeeee666eeeee666eeeee666eeeee66eeeee66666666
    6666666eeeee6666eeeee666eeeee666eeeee666eeeee66eeeee66666666
    6666666eeeee6666eeeee666eeeee666eeeee666eeeee66eeeee66666666
    6666666eeeee6666eeeee666eeeee666eeeee666eeeee66eeeee66666666
    6666666eeeee6666eeeee666eeeee666eeeee666eeeee66eeeee66666666
    6666666eeeee6666eeeee666eeeee666eeeee666eeeee66eeeee66666666
    6666666eeeee6666eeeee666eeeee666eeeee666eeeee66eeeee66666666
    6666666eeeee6666eeeee666eeeee666eeeee666eeeee66eeeee66666666
    6666666eeeee6666eeeee666eeeee666eeeee666eeeee66eeeee66666666
    6666666eeeee6666eeeee666eeeee666eeeee666eeeee66eeeee66666666
    6666666eeeee6666eeeee666eeeee666eeeee666eeeee66eeeee66666666
    6666666eeeee6666eeeee666eeeee666eeeee666eeeee66eeeee66666666
    6666666eeeee6666eeeee666eeeee666eeeee666eeeee66eeeee66666666
    6666666eeeee6666eeeee666eeeee666eeeee666eeeee66eeeee66666666
    6666666eeeee6666eeeee666eeeee666eeeee666eeeee66eeeee66666666
    6666666eeeee6666eeeee666eeeee666eeeee666eeeee66eeeee66666666
    6666666eeeee6666eeeee666eeeee666eeeee666eeeee66eeeee66666666
    6666666eeeee6666eeeee666eeeee666eeeee666eeeee66eeeee66666666
    6666666eeeee6666eeeee666eeeee666eeeee666eeeee66eeeee66666666
    6666666eeeee6666eeeee666eeeee666eeeee666eeeee66eeeee66666666
    6666666eeeee6666eeeee666eeeee666eeeee666eeeee66eeeee66666666
    6666666eeeee6666eeeee666eeeee666eeeee666eeeee66eeeee66666666
    6666666eeeee6666eeeee666eeeee666eeeee666eeeee66eeeee66666666
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
            ......22222222222.......
            .....2222222222222......
            .....fdddddd2222222111..
            ....ffdffddd2222222111..
            ....fdddddddff.2222111..
            ....f11111111...........
            .....11111111...........
            .....111111112222.......
            ...ff111111ff22222......
            ..fff111111ff22222......
            ..ffff11111fff22222.....
            ...ff222112fff22222.....
            ...ff22fff22ff22222.....
            ...ff22f2f22ff22222.....
            ...fffffffffff22222.....
            ...fffffffffff22222.....
            ...fff2fff22ff22222.....
            ...fff222222ff22222.....
            .....fffffffff22222.....
            .....ffff.ffff..........
            .....ffff.ffff..........
            .....ffff.ffff..........
            .....ffff.ffff..........
            ...fffffffffff..........
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
game.onUpdateInterval(1000, function () {
    Dog.sayText(Question_number)
})
forever(function () {
    if (Dialog_Mode == false) {
        controller.moveSprite(Dog, 100, 0)
    } else if (Dialog_Mode == true) {
        controller.moveSprite(Dog, 0, 0)
    }
})
