enum ActionKind {
    Walking,
    Idle,
    Jumping
}
tiles.setTilemap(tiles.createTilemap(hex`1000100002010101010104010304020202020402020302020203040102040202020204020202030302020102010402020404040203020202020202030204020202020402040404040404040102040201010104040202030101010202020404040102020102020202020202020202020403020202010202020202030101020304040402030404040404040403030202020202020302020202020204020202010303020203010301030101040202030202040101010203030203010203010102020404040402020202020202020203020302020202020302020103040404040402020302010202030202020302020104020203020202020202020202020302040202020202`, img`
    . . . . . . 2 . . 2 . . . . 2 . 
    . . . . . . 2 . . 2 . . . . 2 . 
    . . . . . . . . . 2 . . 2 2 2 . 
    . . . . . . . . . 2 . . . . 2 . 
    2 2 2 2 2 2 2 . . 2 . . . . 2 2 
    . . . . . . . . . 2 2 2 . . . . 
    . . . . . . . . . . . 2 . . . . 
    . . . . . . . . . . . 2 2 2 . . 
    2 2 2 2 2 2 2 . . . . . . . . . 
    . . . . . . 2 . . . . . . . . . 
    . . . . . . 2 . . . . . 2 . . . 
    . . . . . . . . . . . . 2 2 2 2 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 . . . . . 
    . . . . . . . . . . 2 . . . . . 
    . . . . . . . . . . 2 . . . . . 
    `, [myTiles.transparency16,sprites.castle.tileGrass3,sprites.castle.tileGrass1,sprites.castle.tileGrass2,sprites.builtin.brick], TileScale.Sixteen))
info.startCountdown(60)
info.setScore(0)
let mr_goose = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f f f . . 
    . . . . . . . . . . . f 1 f . . 
    . . . . . . . . . . . f 1 f f . 
    . . . . . . . . . . . f f . . . 
    . . . . . . . . . . . f f . . . 
    . . . . . . . e e e e d f . . . 
    . . . . e e e e e e e d d d . . 
    . . 1 e e e e e e e d d d d . . 
    . . . 1 1 e e e e d d d d d . . 
    . . . . . 1 d d d d d d . . . . 
    . . . . . . . f . . f . . . . . 
    . . . . . . . f . . f . . . . . 
    . . . . . . . f f . f f . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mr_goose)
controller.moveSprite(mr_goose, 50, 50)
mr_goose.setPosition(14, 115)
info.setLife(3)
let myEnemy = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Enemy)
myEnemy.setPosition(80, 45)
let Enemy2 = sprites.create(img`
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c d d c c c c f . 
    . f f c c d d d d c c f f . 
    . f f f b f d d f b f f f . 
    . f f d 1 f d d f 1 d f f . 
    . . f f d d d d d d f f . . 
    . . e f e d d d d e f e . . 
    . e d f b 3 3 3 3 b f d e . 
    . d d f 3 3 3 3 3 3 c d d . 
    . d d f 6 6 6 6 6 6 f d d . 
    . . . . f f f f f f . . . . 
    . . . . f f . . f f . . . . 
    `, SpriteKind.Enemy)
Enemy2.setPosition(22, 19)
let Enemy3 = sprites.create(img`
    . . . . 5 5 5 5 . . . . . 
    . . 5 5 5 5 5 5 5 5 . . . 
    . 5 5 5 5 5 5 1 5 5 5 . . 
    5 5 5 5 5 5 1 1 5 5 5 1 . 
    5 5 5 1 5 5 5 5 5 5 5 1 . 
    1 1 1 5 5 5 b b 5 5 1 1 . 
    5 5 5 5 f b b f 5 1 1 5 . 
    5 5 5 b f b b f b 5 5 5 . 
    . f d 1 f d d f 1 d f . . 
    . f b d d d d d d b f . . 
    . f f f b b b b f f f . . 
    f b f b 3 3 3 3 b f b f . 
    b d f 3 3 3 3 3 3 f d b . 
    b b f 6 6 6 6 6 6 f b b . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Enemy)
Enemy3.setPosition(20, 200)
let Enemy4 = sprites.create(img`
    . . . . 9 9 9 9 . . . . . 
    . . 9 9 9 9 9 9 9 9 . . . 
    . 9 9 9 9 9 9 6 9 9 9 . . 
    9 9 9 9 9 9 6 6 9 9 9 6 . 
    9 9 9 6 9 9 9 9 9 9 9 6 . 
    6 6 6 9 9 9 e e 9 9 6 6 . 
    9 9 9 9 f e e f 9 9 6 9 . 
    9 9 9 b f e e f b f f 9 . 
    9 f e 1 f e e f 1 e f 9 . 
    9 f e e e e e e e e f 9 . 
    9 f f f e e e e f f f 9 . 
    f e f b 7 7 7 7 b f e f . 
    e e f 7 7 7 7 7 7 f e e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . 9 f f f f f f 9 . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Enemy)
Enemy4.setPosition(100, 190)
let Enemy5 = sprites.create(img`
    . . . . 4 4 4 4 . . . . . 
    . . 4 4 4 4 4 4 4 4 . . . 
    . 4 4 4 4 4 4 4 4 4 4 . . 
    4 4 4 4 4 4 4 4 4 4 4 4 . 
    4 4 4 4 4 4 4 4 4 4 4 4 . 
    4 4 4 4 4 4 d d 4 4 4 4 . 
    4 4 4 4 f d d f 4 4 4 4 . 
    4 4 d b f d d f 4 4 4 4 . 
    4 f d 1 f d d f 1 d f 4 . 
    . f d 3 3 d d 3 3 d f . . 
    . f f f d d d d f f f . . 
    f d f b 9 9 9 9 b f d f . 
    d d f 9 9 9 9 9 9 f d d . 
    d d f 8 8 8 8 8 8 f d d . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Enemy)
Enemy5.setPosition(140, 240)
let Enemy6 = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f d d f f c c . 
    f f f f f d d f f c c f . 
    f f f b f d d f b f f f . 
    f f d 1 f d d f 1 d f f . 
    f f d d d 2 2 d d d f f . 
    f f f f d d d d f f f f . 
    f d f 2 2 d d 2 2 f d f . 
    d d f 2 2 2 2 2 2 f d d . 
    d d f 2 2 2 2 2 2 f d d . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Enemy)
Enemy6.setPosition(200, 17)
let Enemy7 = sprites.create(img`
    . . . . e e e e . . . . . 
    . . e e e e e e e e . . . 
    . e e e e e e e e e e . . 
    e e e e e e e e e e e e . 
    e e e e e e e e e e e e . 
    e e e e e e d d e e e e . 
    e e e e f d d f e e e e . 
    e e e b f d d f b e e e . 
    e e d 1 f d d f 1 d e e . 
    e e d d d d d d d d e e . 
    e e e e d d d d e e e e . 
    e d f b 4 4 4 4 b f d e . 
    d d f 4 4 4 4 4 4 f d d . 
    d d f 6 6 6 6 6 6 f d d . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Enemy)
Enemy7.setPosition(240, 240)
let dog = sprites.create(img`
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
    `, SpriteKind.Enemy)
forever(function () {
    if (mr_goose.overlapsWith(myEnemy)) {
        if (controller.A.isPressed()) {
            myEnemy.destroy(effects.spray, 500)
            info.changeScoreBy(1)
        } else if (controller.B.isPressed()) {
            myEnemy.destroy(effects.rings, 500)
            info.changeScoreBy(1)
        }
    }
    if (mr_goose.overlapsWith(Enemy2)) {
        if (controller.A.isPressed()) {
            Enemy2.destroy(effects.fire, 500)
            info.changeScoreBy(1)
        } else if (controller.B.isPressed()) {
            Enemy2.destroy(effects.rings, 500)
            info.changeScoreBy(1)
        }
    }
    if (mr_goose.overlapsWith(Enemy3)) {
        if (controller.A.isPressed()) {
            Enemy3.destroy(effects.spray, 500)
            info.changeScoreBy(1)
        } else if (controller.B.isPressed()) {
            Enemy3.destroy(effects.rings, 500)
            info.changeScoreBy(1)
        }
    }
    if (mr_goose.overlapsWith(Enemy4)) {
        if (controller.A.isPressed()) {
            Enemy4.destroy(effects.spray, 500)
            info.changeScoreBy(1)
        } else if (controller.B.isPressed()) {
            Enemy4.destroy(effects.rings, 500)
            info.changeScoreBy(1)
        }
    }
    if (mr_goose.overlapsWith(Enemy5)) {
        if (controller.A.isPressed()) {
            Enemy5.destroy(effects.spray, 500)
            info.changeScoreBy(1)
        } else if (controller.B.isPressed()) {
            Enemy5.destroy(effects.rings, 500)
            info.changeScoreBy(1)
        }
    }
    if (mr_goose.overlapsWith(Enemy6)) {
        if (controller.A.isPressed()) {
            Enemy6.destroy(effects.spray, 500)
            info.changeScoreBy(1)
        } else if (controller.B.isPressed()) {
            Enemy6.destroy(effects.rings, 500)
            info.changeScoreBy(1)
        }
    }
    if (mr_goose.overlapsWith(Enemy7)) {
        if (controller.A.isPressed()) {
            Enemy7.destroy(effects.spray, 500)
            info.changeScoreBy(1)
        } else if (controller.B.isPressed()) {
            Enemy7.destroy(effects.rings, 500)
            info.changeScoreBy(1)
        }
    }
    if (dog.overlapsWith(mr_goose)) {
        info.changeLifeBy(-1)
        pause(2000)
    }
})
forever(function () {
    if (info.score() == 7) {
        game.over(true, effects.confetti)
    }
})
game.onUpdateInterval(30000, function () {
    if (game.runtime() >= 30) {
        dog = sprites.create(img`
            . . . e e . . . . e e . . . . . 
            . . e e e 8 8 8 8 e e e . . . . 
            . . e e 8 5 5 5 5 8 e e . . . . 
            . . 8 8 8 8 8 8 8 8 8 8 . . . . 
            . . e e e e e e e e e e . . . . 
            . . e e e e e e e e e e . . . . 
            . . e e f e e e e f e e . . . . 
            . . e e e e f f e e e e . . e e 
            . . e e e e e e e e e e . e e e 
            . . . 8 8 8 5 5 8 8 8 8 8 e e e 
            . . . 8 8 8 8 8 8 8 8 8 8 e e . 
            . . . 8 8 8 8 8 8 8 8 8 8 e . . 
            . . . 8 8 8 8 8 8 8 8 8 8 . . . 
            . . . e e . . e e . . e e . . . 
            `, SpriteKind.Enemy)
        dog.follow(mr_goose, 20)
    }
})
