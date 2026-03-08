namespace SpriteKind {
    export const Image = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (spriteutils.distanceBetween(myEnemy, mySprite) <= 25) {
        myEnemy.setVelocity(0, 0)
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
        animation.runImageAnimation(
        myEnemy,
        [img`
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
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
            `,img`
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
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
            `,img`
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
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
            `,img`
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            `,img`
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . 3 3 3 3 3 3 . . . . . 
            . . . . . 3 3 3 3 3 3 . . . . . 
            `,img`
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . 3 3 3 3 3 3 3 3 3 3 . . . 
            . . . 3 3 3 3 3 3 3 3 3 3 . . . 
            `,img`
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
            . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
            `,img`
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
            . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
            `,img`
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `,img`
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
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `,img`
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
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `,img`
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
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `,img`
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
            . . . . . . 3 3 3 3 . . . . . . 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `,img`
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
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `],
        50,
        false
        )
        pause(1500)
        sprites.destroy(myEnemy)
        if (grid2 == 0) {
            grid2 += 1
            myEnemy = sprites.create(img`
                . . . . . f f f f f f . . . . . 
                . . . . . f 4 4 4 1 f . . . . . 
                . . . . . f 4 4 4 4 f . . . . . 
                . . . . . f 4 4 4 4 f . . . . . 
                . . . . . f 4 4 4 4 f . . . . . 
                f f f f f f f f f f f f f f f f 
                f 4 4 4 1 f 4 4 4 1 f 4 4 4 1 f 
                f 4 4 4 4 f 4 4 4 4 f 4 4 4 4 f 
                f 4 4 4 4 f 4 4 4 4 f 4 4 4 4 f 
                f 4 4 4 4 f 4 4 4 4 f 4 4 4 4 f 
                f f f f f f f f f f f f f f f f 
                `, SpriteKind.Player)
            myEnemy.setScale(1.75, ScaleAnchor.Middle)
            mySprite.setScale(1.25, ScaleAnchor.Middle)
            scene.setBackgroundImage(img`
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff455fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ee5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5cfffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe5557cccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe5555cccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe5557cccccffffcfffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffff
                fffffffff55feffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff557cccccccffcccffffffffffffffffffffffffffffffffffffffffffffff45ffffffffffffffffffff
                fffffff555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55ccccccccfffffffffffffffffffffffffffffffffffffffffffffffff5555554fffffffffffffffff
                fffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ccccccccffffccfffffffffffffffffffffffffffffffffffffffffff555554ffffffffffffffffff
                fffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccfffccfffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffff
                fffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccfffffffffffffffffffffffffffffffffffffffffffffffff55555efffffffffffffffff
                ffffffff55ff5efffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffff555ff55fffffffffffffffff
                ffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe444eccccccceccecccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeee444444eeee4cceceeceeec4efeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe5554444eeee444ee44eee4eee44444eefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444ee4eeeeee4444ee4444ee44eee44444eeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe444444eeeeee44444eee4444eee444ee44444ee4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44444444eeeeeee4444ee444444ee444eeee44eee4444fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444eee444eee44ee4444444ee4444eeeeeee4444444fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444eee444444eeeee4444eeeeeeeee4eeee44444444444fffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444eee44444444eeeeeeeeeee4eeeeeeeeee444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffff444444444ee44444444444eeeeeee44444ee44444eee444444444444fffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffff444444444ee44444444444ee44444444444ee444444ee4444444444444ffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffff444444444ee444444444444ee444444444444ee444444ee444444444444ffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffff44444444ee444444444444ee4444444444444ee4444444ee444444444444fffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffff44444444ee4444444444444ee4444444444444ee4444444ee444444444444effffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffe4444444eee444444444444eee44444444444444ee4444444ee444444444444ffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffff44444444ee44444444444411d44444444444444d1d4444444ee444444444444efffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffff44444444ee444444444444111dd444444444444d11ddb444444ee444444444444fffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffff44444444ee44444444444d115ddd444444444441155ddb44444ee4444444444444ffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff44444444ee44444444444411555dd4444444444115555dd444444ee444444444444efffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff44444444ee444444444441155555dd4444444431555555dd44444ee4444444444444effffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff4444444ee4444444444445555555dd4444444445554e45dd444444ee444444444444effffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff4444444ee44444444444555ee455dd4444444455554ee55dd44444ee444444444444effffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff4444444ee444444444444454ee44ddd44444444545544eeddb44444ee444444444444effffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff4444444ee44444444444444ee44444444444444444444ee444444444ee44444444444eefffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff4444444ee44444444444444ee44444444444444444444ee444444444ee44444444444eefffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff444444ee444444444444444ee44444444444444444444ee4444444444ee4444444444eefffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff444444ee44444444444444ee444444444411d444444444e4444444444ee4444444444eefffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff444444ee44444444444444ee444444444111dd44444444ee444444444ee4444444444eefffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff44444ee444444444444444ee444444444115dd44444444ee444444444ee4444444444eefffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff44444ee444444444444444e44444444411555dd4444444ee4444444444ee444444444eefffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff44444ee44444444444444ee4444444441d555dd4444444ee4444444444ee44444444eeefffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff44444ee44444444444444ee444444445dddddddd444444eed444444444ee44444444eeecccccccccccccc88888888888888888888888888888
                888888888888888888888888888888888888888888888844444e444444444444444e51d4444445dddddddd444444edd4444444444e4444444eeee8888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888c444ee444444444444444e511144444444444444444444ddd4444444444e4444444eeec8888888888888888888888888888888888888888888
                888888866b9999999999999999999999999999999988888444ee44444444444444ee55111d444444444444444454dd44444444444ee444444eee88888888888888888888888888888888888888888888
                99999999999999999999999999999999999999999968888444ee44444444444444ee4555111d444444444444455ddb44444444444ee44444eeee88888888888888888888888888888888888888888888
                99996666688888888888888888888888888888888888888844ee44444444444444ee4455551144444444444445ddde44444444444ee44444eeec88888888888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888844ee44444444444444ee4445555544455551114445ddee44444444444ee4444eeee888888888888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888884ee44444444444444ee444555555555555555555dddee44444444444ee4444eeec888888888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888844ee4444444444444e4444455555555555555555dd4ee44444444444ee444eee88888888888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888884ee4444444444444e444444555555511115555dd44ee44444444444ee44eeeffff88888888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888888ee4444444444444ee44444455dddd511dddddd444ee4444444444ee4eeeeffffffffc8888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888888ce4444444444444ee44444445dd444ddddbdd4444ee4444444444eeeeeeffffffffff8888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888ee444444444444ee44444444bd44455444db4444ee4444444444eeeecfffffffffffff88888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888888888e444444444444ee444444444444444444444444ee444444444eeeefffffffffffffffc8888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888888888884444444444ee444444444444444444444444ee4444444eeeeeffffffffffffffffff888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888884444444444ee44444444444444444444444ee44444eeeeefffffffffffffffffff8888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888888888888888e4444444ee4444444444444444444444ee444eeeeeefffffffffffffffffffff8888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888888888888888888e4444ee4444444444444444444444eeeeeeeefffffffffffffffffffffff88888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888888888888888888888feeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffc888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888fffffffffeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffff8888888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffff888888888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888888888888888888888888cffffffffffffffffffffffffffffffffffffffffffc888888888888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888888888888888888888888888cffcffffffffffffffffffffcc88888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886866666666666b9999888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886999999999999999999999999999999999999999999888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889999999999999999999999966666666666666688888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                `)
            myEnemy.setBounceOnWall(true)
            myEnemy.setPosition(randint(0, 160), randint(0, 120))
            myEnemy.setVelocity(75, 75)
        } else if (grid2 == 1) {
            grid2 += 1
            myEnemy = sprites.create(img`
                . . . . . f f f f f f f f f f f 
                . . . . . f 5 5 5 1 f 5 5 5 1 f 
                . . . . . f 5 5 5 5 f 5 5 5 5 f 
                . . . . . f 5 5 5 5 f 5 5 5 5 f 
                . . . . . f 5 5 5 5 f 5 5 5 5 f 
                . . . . . f f f f f f f f f f f 
                . . . . . f 5 5 5 1 f 5 5 5 1 f 
                . . . . . f 5 5 5 5 f 5 5 5 5 f 
                . . . . . f 5 5 5 5 f 5 5 5 5 f 
                . . . . . f 5 5 5 5 f 5 5 5 5 f 
                . . . . . f f f f f f f f f f f 
                `, SpriteKind.Player)
            myEnemy.setScale(1.75, ScaleAnchor.Middle)
            mySprite.setScale(1.25, ScaleAnchor.Middle)
            scene.setBackgroundImage(img`
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff455fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ee5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5cfffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe5557cccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe5555cccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe5557cccccffffcfffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffff
                fffffffff55feffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff557cccccccffcccffffffffffffffffffffffffffffffffffffffffffffff45ffffffffffffffffffff
                fffffff555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55ccccccccfffffffffffffffffffffffffffffffffffffffffffffffff5555554fffffffffffffffff
                fffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ccccccccffffccfffffffffffffffffffffffffffffffffffffffffff555554ffffffffffffffffff
                fffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccfffccfffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffff
                fffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccfffffffffffffffffffffffffffffffffffffffffffffffff55555efffffffffffffffff
                ffffffff55ff5efffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffff555ff55fffffffffffffffff
                ffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe444eccccccceccecccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeee444444eeee4cceceeceeec4efeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe5554444eeee444ee44eee4eee44444eefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444ee4eeeeee4444ee4444ee44eee44444eeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe444444eeeeee44444eee4444eee444ee44444ee4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44444444eeeeeee4444ee444444ee444eeee44eee4444fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444eee444eee44ee4444444ee4444eeeeeee4444444fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444eee444444eeeee4444eeeeeeeee4eeee44444444444fffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444eee44444444eeeeeeeeeee4eeeeeeeeee444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffff444444444ee44444444444eeeeeee44444ee44444eee444444444444fffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffff444444444ee44444444444ee44444444444ee444444ee4444444444444ffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffff444444444ee444444444444ee444444444444ee444444ee444444444444ffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffff44444444ee444444444444ee4444444444444ee4444444ee444444444444fffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffff44444444ee4444444444444ee4444444444444ee4444444ee444444444444effffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffe4444444eee444444444444eee44444444444444ee4444444ee444444444444ffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffff44444444ee44444444444411d44444444444444d1d4444444ee444444444444efffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffff44444444ee444444444444111dd444444444444d11ddb444444ee444444444444fffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffff44444444ee44444444444d115ddd444444444441155ddb44444ee4444444444444ffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff44444444ee44444444444411555dd4444444444115555dd444444ee444444444444efffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff44444444ee444444444441155555dd4444444431555555dd44444ee4444444444444effffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff4444444ee4444444444445555555dd4444444445554e45dd444444ee444444444444effffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff4444444ee44444444444555ee455dd4444444455554ee55dd44444ee444444444444effffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff4444444ee444444444444454ee44ddd44444444545544eeddb44444ee444444444444effffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff4444444ee44444444444444ee44444444444444444444ee444444444ee44444444444eefffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff4444444ee44444444444444ee44444444444444444444ee444444444ee44444444444eefffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff444444ee444444444444444ee44444444444444444444ee4444444444ee4444444444eefffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff444444ee44444444444444ee444444444411d444444444e4444444444ee4444444444eefffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff444444ee44444444444444ee444444444111dd44444444ee444444444ee4444444444eefffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff44444ee444444444444444ee444444444115dd44444444ee444444444ee4444444444eefffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff44444ee444444444444444e44444444411555dd4444444ee4444444444ee444444444eefffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff44444ee44444444444444ee4444444441d555dd4444444ee4444444444ee44444444eeefffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff44444ee44444444444444ee444444445dddddddd444444eed444444444ee44444444eeecccccccccccccc88888888888888888888888888888
                888888888888888888888888888888888888888888888844444e444444444444444e51d4444445dddddddd444444edd4444444444e4444444eeee8888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888c444ee444444444444444e511144444444444444444444ddd4444444444e4444444eeec8888888888888888888888888888888888888888888
                888888866b9999999999999999999999999999999988888444ee44444444444444ee55111d444444444444444454dd44444444444ee444444eee88888888888888888888888888888888888888888888
                99999999999999999999999999999999999999999968888444ee44444444444444ee4555111d444444444444455ddb44444444444ee44444eeee88888888888888888888888888888888888888888888
                99996666688888888888888888888888888888888888888844ee44444444444444ee4455551144444444444445ddde44444444444ee44444eeec88888888888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888844ee44444444444444ee4445555544455551114445ddee44444444444ee4444eeee888888888888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888884ee44444444444444ee444555555555555555555dddee44444444444ee4444eeec888888888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888844ee4444444444444e4444455555555555555555dd4ee44444444444ee444eee88888888888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888884ee4444444444444e444444555555511115555dd44ee44444444444ee44eeeffff88888888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888888ee4444444444444ee44444455dddd511dddddd444ee4444444444ee4eeeeffffffffc8888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888888ce4444444444444ee44444445dd444ddddbdd4444ee4444444444eeeeeeffffffffff8888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888ee444444444444ee44444444bd44455444db4444ee4444444444eeeecfffffffffffff88888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888888888e444444444444ee444444444444444444444444ee444444444eeeefffffffffffffffc8888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888888888884444444444ee444444444444444444444444ee4444444eeeeeffffffffffffffffff888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888884444444444ee44444444444444444444444ee44444eeeeefffffffffffffffffff8888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888888888888888e4444444ee4444444444444444444444ee444eeeeeefffffffffffffffffffff8888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888888888888888888e4444ee4444444444444444444444eeeeeeeefffffffffffffffffffffff88888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888888888888888888888feeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffc888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888fffffffffeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffff8888888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffff888888888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888888888888888888888888cffffffffffffffffffffffffffffffffffffffffffc888888888888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888888888888888888888888888cffcffffffffffffffffffffcc88888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886866666666666b9999888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886999999999999999999999999999999999999999999888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889999999999999999999999966666666666666688888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                `)
            myEnemy.setBounceOnWall(true)
            myEnemy.setPosition(randint(0, 160), randint(0, 120))
            myEnemy.setVelocity(75, 75)
        } else if (grid2 == 2) {
            grid2 += 1
            myEnemy = sprites.create(img`
                . . . . . . . . . . f f f f f f 
                . . . . . . . . . . f 7 7 7 1 f 
                . . . . . . . . . . f 7 7 7 7 f 
                . . . . . . . . . . f 7 7 7 7 f 
                . . . . . . . . . . f 7 7 7 7 f 
                f f f f f f f f f f f f f f f f 
                f 7 7 7 1 f 7 7 7 1 f 7 7 7 1 f 
                f 7 7 7 7 f 7 7 7 7 f 7 7 7 7 f 
                f 7 7 7 7 f 7 7 7 7 f 7 7 7 7 f 
                f 7 7 7 7 f 7 7 7 7 f 7 7 7 7 f 
                f f f f f f f f f f f f f f f f 
                `, SpriteKind.Player)
            myEnemy.setScale(1.75, ScaleAnchor.Middle)
            mySprite.setScale(1.25, ScaleAnchor.Middle)
            scene.setBackgroundImage(img`
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff455fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ee5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5cfffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe5557cccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe5555cccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe5557cccccffffcfffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffff
                fffffffff55feffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff557cccccccffcccffffffffffffffffffffffffffffffffffffffffffffff45ffffffffffffffffffff
                fffffff555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55ccccccccfffffffffffffffffffffffffffffffffffffffffffffffff5555554fffffffffffffffff
                fffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ccccccccffffccfffffffffffffffffffffffffffffffffffffffffff555554ffffffffffffffffff
                fffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccfffccfffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffff
                fffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccfffffffffffffffffffffffffffffffffffffffffffffffff55555efffffffffffffffff
                ffffffff55ff5efffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffff555ff55fffffffffffffffff
                ffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe444eccccccceccecccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeee444444eeee4cceceeceeec4efeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe5554444eeee444ee44eee4eee44444eefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444ee4eeeeee4444ee4444ee44eee44444eeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe444444eeeeee44444eee4444eee444ee44444ee4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44444444eeeeeee4444ee444444ee444eeee44eee4444fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444eee444eee44ee4444444ee4444eeeeeee4444444fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444eee444444eeeee4444eeeeeeeee4eeee44444444444fffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444eee44444444eeeeeeeeeee4eeeeeeeeee444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffff444444444ee44444444444eeeeeee44444ee44444eee444444444444fffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffff444444444ee44444444444ee44444444444ee444444ee4444444444444ffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffff444444444ee444444444444ee444444444444ee444444ee444444444444ffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffff44444444ee444444444444ee4444444444444ee4444444ee444444444444fffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffff44444444ee4444444444444ee4444444444444ee4444444ee444444444444effffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffe4444444eee444444444444eee44444444444444ee4444444ee444444444444ffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffff44444444ee44444444444411d44444444444444d1d4444444ee444444444444efffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffff44444444ee444444444444111dd444444444444d11ddb444444ee444444444444fffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffff44444444ee44444444444d115ddd444444444441155ddb44444ee4444444444444ffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff44444444ee44444444444411555dd4444444444115555dd444444ee444444444444efffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff44444444ee444444444441155555dd4444444431555555dd44444ee4444444444444effffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff4444444ee4444444444445555555dd4444444445554e45dd444444ee444444444444effffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff4444444ee44444444444555ee455dd4444444455554ee55dd44444ee444444444444effffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff4444444ee444444444444454ee44ddd44444444545544eeddb44444ee444444444444effffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff4444444ee44444444444444ee44444444444444444444ee444444444ee44444444444eefffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff4444444ee44444444444444ee44444444444444444444ee444444444ee44444444444eefffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff444444ee444444444444444ee44444444444444444444ee4444444444ee4444444444eefffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff444444ee44444444444444ee444444444411d444444444e4444444444ee4444444444eefffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff444444ee44444444444444ee444444444111dd44444444ee444444444ee4444444444eefffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff44444ee444444444444444ee444444444115dd44444444ee444444444ee4444444444eefffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff44444ee444444444444444e44444444411555dd4444444ee4444444444ee444444444eefffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff44444ee44444444444444ee4444444441d555dd4444444ee4444444444ee44444444eeefffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff44444ee44444444444444ee444444445dddddddd444444eed444444444ee44444444eeecccccccccccccc88888888888888888888888888888
                888888888888888888888888888888888888888888888844444e444444444444444e51d4444445dddddddd444444edd4444444444e4444444eeee8888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888c444ee444444444444444e511144444444444444444444ddd4444444444e4444444eeec8888888888888888888888888888888888888888888
                888888866b9999999999999999999999999999999988888444ee44444444444444ee55111d444444444444444454dd44444444444ee444444eee88888888888888888888888888888888888888888888
                99999999999999999999999999999999999999999968888444ee44444444444444ee4555111d444444444444455ddb44444444444ee44444eeee88888888888888888888888888888888888888888888
                99996666688888888888888888888888888888888888888844ee44444444444444ee4455551144444444444445ddde44444444444ee44444eeec88888888888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888844ee44444444444444ee4445555544455551114445ddee44444444444ee4444eeee888888888888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888884ee44444444444444ee444555555555555555555dddee44444444444ee4444eeec888888888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888844ee4444444444444e4444455555555555555555dd4ee44444444444ee444eee88888888888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888884ee4444444444444e444444555555511115555dd44ee44444444444ee44eeeffff88888888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888888ee4444444444444ee44444455dddd511dddddd444ee4444444444ee4eeeeffffffffc8888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888888ce4444444444444ee44444445dd444ddddbdd4444ee4444444444eeeeeeffffffffff8888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888ee444444444444ee44444444bd44455444db4444ee4444444444eeeecfffffffffffff88888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888888888e444444444444ee444444444444444444444444ee444444444eeeefffffffffffffffc8888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888888888884444444444ee444444444444444444444444ee4444444eeeeeffffffffffffffffff888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888884444444444ee44444444444444444444444ee44444eeeeefffffffffffffffffff8888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888888888888888e4444444ee4444444444444444444444ee444eeeeeefffffffffffffffffffff8888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888888888888888888e4444ee4444444444444444444444eeeeeeeefffffffffffffffffffffff88888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888888888888888888888feeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffc888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888fffffffffeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffff8888888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffff888888888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888888888888888888888888cffffffffffffffffffffffffffffffffffffffffffc888888888888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888888888888888888888888888cffcffffffffffffffffffffcc88888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886866666666666b9999888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886999999999999999999999999999999999999999999888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889999999999999999999999966666666666666688888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                `)
            myEnemy.setBounceOnWall(true)
            myEnemy.setPosition(randint(0, 160), randint(0, 120))
            myEnemy.setVelocity(75, 75)
        } else if (grid2 == 3) {
            grid2 += 1
            myEnemy = sprites.create(img`
                f f f f f f f f f f f . . . . . 
                f 8 8 8 1 f 8 8 8 1 f . . . . . 
                f 8 8 8 8 f 8 8 8 8 f . . . . . 
                f 8 8 8 8 f 8 8 8 8 f . . . . . 
                f 8 8 8 8 f 8 8 8 8 f . . . . . 
                f f f f f f f f f f f f f f f f 
                . . . . . f 8 8 8 1 f 8 8 8 1 f 
                . . . . . f 8 8 8 8 f 8 8 8 8 f 
                . . . . . f 8 8 8 8 f 8 8 8 8 f 
                . . . . . f 8 8 8 8 f 8 8 8 8 f 
                . . . . . f f f f f f f f f f f 
                `, SpriteKind.Player)
            myEnemy.setScale(1.75, ScaleAnchor.Middle)
            mySprite.setScale(1.25, ScaleAnchor.Middle)
            scene.setBackgroundImage(img`
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff455fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ee5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5cfffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe5557cccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe5555cccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe5557cccccffffcfffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffff
                fffffffff55feffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff557cccccccffcccffffffffffffffffffffffffffffffffffffffffffffff45ffffffffffffffffffff
                fffffff555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55ccccccccfffffffffffffffffffffffffffffffffffffffffffffffff5555554fffffffffffffffff
                fffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ccccccccffffccfffffffffffffffffffffffffffffffffffffffffff555554ffffffffffffffffff
                fffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccfffccfffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffff
                fffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccfffffffffffffffffffffffffffffffffffffffffffffffff55555efffffffffffffffff
                ffffffff55ff5efffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffff555ff55fffffffffffffffff
                ffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe444eccccccceccecccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeee444444eeee4cceceeceeec4efeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe5554444eeee444ee44eee4eee44444eefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444ee4eeeeee4444ee4444ee44eee44444eeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe444444eeeeee44444eee4444eee444ee44444ee4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44444444eeeeeee4444ee444444ee444eeee44eee4444fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444eee444eee44ee4444444ee4444eeeeeee4444444fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444eee444444eeeee4444eeeeeeeee4eeee44444444444fffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444eee44444444eeeeeeeeeee4eeeeeeeeee444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffff444444444ee44444444444eeeeeee44444ee44444eee444444444444fffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffff444444444ee44444444444ee44444444444ee444444ee4444444444444ffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffff444444444ee444444444444ee444444444444ee444444ee444444444444ffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffff44444444ee444444444444ee4444444444444ee4444444ee444444444444fffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffff44444444ee4444444444444ee4444444444444ee4444444ee444444444444effffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffe4444444eee444444444444eee44444444444444ee4444444ee444444444444ffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffff44444444ee44444444444411d44444444444444d1d4444444ee444444444444efffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffff44444444ee444444444444111dd444444444444d11ddb444444ee444444444444fffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffff44444444ee44444444444d115ddd444444444441155ddb44444ee4444444444444ffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff44444444ee44444444444411555dd4444444444115555dd444444ee444444444444efffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff44444444ee444444444441155555dd4444444431555555dd44444ee4444444444444effffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff4444444ee4444444444445555555dd4444444445554e45dd444444ee444444444444effffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff4444444ee44444444444555ee455dd4444444455554ee55dd44444ee444444444444effffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff4444444ee444444444444454ee44ddd44444444545544eeddb44444ee444444444444effffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff4444444ee44444444444444ee44444444444444444444ee444444444ee44444444444eefffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff4444444ee44444444444444ee44444444444444444444ee444444444ee44444444444eefffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff444444ee444444444444444ee44444444444444444444ee4444444444ee4444444444eefffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff444444ee44444444444444ee444444444411d444444444e4444444444ee4444444444eefffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff444444ee44444444444444ee444444444111dd44444444ee444444444ee4444444444eefffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff44444ee444444444444444ee444444444115dd44444444ee444444444ee4444444444eefffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff44444ee444444444444444e44444444411555dd4444444ee4444444444ee444444444eefffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff44444ee44444444444444ee4444444441d555dd4444444ee4444444444ee44444444eeefffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff44444ee44444444444444ee444444445dddddddd444444eed444444444ee44444444eeecccccccccccccc88888888888888888888888888888
                888888888888888888888888888888888888888888888844444e444444444444444e51d4444445dddddddd444444edd4444444444e4444444eeee8888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888c444ee444444444444444e511144444444444444444444ddd4444444444e4444444eeec8888888888888888888888888888888888888888888
                888888866b9999999999999999999999999999999988888444ee44444444444444ee55111d444444444444444454dd44444444444ee444444eee88888888888888888888888888888888888888888888
                99999999999999999999999999999999999999999968888444ee44444444444444ee4555111d444444444444455ddb44444444444ee44444eeee88888888888888888888888888888888888888888888
                99996666688888888888888888888888888888888888888844ee44444444444444ee4455551144444444444445ddde44444444444ee44444eeec88888888888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888844ee44444444444444ee4445555544455551114445ddee44444444444ee4444eeee888888888888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888884ee44444444444444ee444555555555555555555dddee44444444444ee4444eeec888888888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888844ee4444444444444e4444455555555555555555dd4ee44444444444ee444eee88888888888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888884ee4444444444444e444444555555511115555dd44ee44444444444ee44eeeffff88888888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888888ee4444444444444ee44444455dddd511dddddd444ee4444444444ee4eeeeffffffffc8888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888888ce4444444444444ee44444445dd444ddddbdd4444ee4444444444eeeeeeffffffffff8888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888ee444444444444ee44444444bd44455444db4444ee4444444444eeeecfffffffffffff88888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888888888e444444444444ee444444444444444444444444ee444444444eeeefffffffffffffffc8888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888888888884444444444ee444444444444444444444444ee4444444eeeeeffffffffffffffffff888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888884444444444ee44444444444444444444444ee44444eeeeefffffffffffffffffff8888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888888888888888e4444444ee4444444444444444444444ee444eeeeeefffffffffffffffffffff8888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888888888888888888e4444ee4444444444444444444444eeeeeeeefffffffffffffffffffffff88888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888888888888888888888feeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffc888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888fffffffffeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffff8888888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffff888888888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888888888888888888888888cffffffffffffffffffffffffffffffffffffffffffc888888888888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888888888888888888888888888cffcffffffffffffffffffffcc88888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886866666666666b9999888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886999999999999999999999999999999999999999999888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889999999999999999999999966666666666666688888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                `)
            myEnemy.setBounceOnWall(true)
            myEnemy.setPosition(randint(0, 160), randint(0, 120))
            myEnemy.setVelocity(75, 75)
        } else if (grid2 == 4) {
            grid2 += 1
            myEnemy = sprites.create(img`
                f f f f f f 
                f a a a 1 f 
                f a a a a f 
                f a a a a f 
                f a a a a f 
                f f f f f f 
                f a a a 1 f 
                f a a a a f 
                f a a a a f 
                f a a a a f 
                f f f f f f 
                f a a a 1 f 
                f a a a a f 
                f a a a a f 
                f a a a a f 
                f f f f f f 
                f a a a 1 f 
                f a a a a f 
                f a a a a f 
                f a a a a f 
                f f f f f f 
                `, SpriteKind.Player)
            myEnemy.setScale(1.75, ScaleAnchor.Middle)
            mySprite.setScale(1.25, ScaleAnchor.Middle)
            scene.setBackgroundImage(img`
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff455fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ee5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5cfffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe5557cccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe5555cccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe5557cccccffffcfffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffff
                fffffffff55feffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff557cccccccffcccffffffffffffffffffffffffffffffffffffffffffffff45ffffffffffffffffffff
                fffffff555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55ccccccccfffffffffffffffffffffffffffffffffffffffffffffffff5555554fffffffffffffffff
                fffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ccccccccffffccfffffffffffffffffffffffffffffffffffffffffff555554ffffffffffffffffff
                fffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccfffccfffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffff
                fffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccfffffffffffffffffffffffffffffffffffffffffffffffff55555efffffffffffffffff
                ffffffff55ff5efffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffff555ff55fffffffffffffffff
                ffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe444eccccccceccecccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeee444444eeee4cceceeceeec4efeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe5554444eeee444ee44eee4eee44444eefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444ee4eeeeee4444ee4444ee44eee44444eeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe444444eeeeee44444eee4444eee444ee44444ee4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44444444eeeeeee4444ee444444ee444eeee44eee4444fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444eee444eee44ee4444444ee4444eeeeeee4444444fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444eee444444eeeee4444eeeeeeeee4eeee44444444444fffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444eee44444444eeeeeeeeeee4eeeeeeeeee444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffff444444444ee44444444444eeeeeee44444ee44444eee444444444444fffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffff444444444ee44444444444ee44444444444ee444444ee4444444444444ffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffff444444444ee444444444444ee444444444444ee444444ee444444444444ffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffff44444444ee444444444444ee4444444444444ee4444444ee444444444444fffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffff44444444ee4444444444444ee4444444444444ee4444444ee444444444444effffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffe4444444eee444444444444eee44444444444444ee4444444ee444444444444ffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffff44444444ee44444444444411d44444444444444d1d4444444ee444444444444efffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffff44444444ee444444444444111dd444444444444d11ddb444444ee444444444444fffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffff44444444ee44444444444d115ddd444444444441155ddb44444ee4444444444444ffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff44444444ee44444444444411555dd4444444444115555dd444444ee444444444444efffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff44444444ee444444444441155555dd4444444431555555dd44444ee4444444444444effffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff4444444ee4444444444445555555dd4444444445554e45dd444444ee444444444444effffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff4444444ee44444444444555ee455dd4444444455554ee55dd44444ee444444444444effffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff4444444ee444444444444454ee44ddd44444444545544eeddb44444ee444444444444effffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff4444444ee44444444444444ee44444444444444444444ee444444444ee44444444444eefffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff4444444ee44444444444444ee44444444444444444444ee444444444ee44444444444eefffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff444444ee444444444444444ee44444444444444444444ee4444444444ee4444444444eefffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff444444ee44444444444444ee444444444411d444444444e4444444444ee4444444444eefffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff444444ee44444444444444ee444444444111dd44444444ee444444444ee4444444444eefffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff44444ee444444444444444ee444444444115dd44444444ee444444444ee4444444444eefffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff44444ee444444444444444e44444444411555dd4444444ee4444444444ee444444444eefffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff44444ee44444444444444ee4444444441d555dd4444444ee4444444444ee44444444eeefffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff44444ee44444444444444ee444444445dddddddd444444eed444444444ee44444444eeecccccccccccccc88888888888888888888888888888
                888888888888888888888888888888888888888888888844444e444444444444444e51d4444445dddddddd444444edd4444444444e4444444eeee8888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888c444ee444444444444444e511144444444444444444444ddd4444444444e4444444eeec8888888888888888888888888888888888888888888
                888888866b9999999999999999999999999999999988888444ee44444444444444ee55111d444444444444444454dd44444444444ee444444eee88888888888888888888888888888888888888888888
                99999999999999999999999999999999999999999968888444ee44444444444444ee4555111d444444444444455ddb44444444444ee44444eeee88888888888888888888888888888888888888888888
                99996666688888888888888888888888888888888888888844ee44444444444444ee4455551144444444444445ddde44444444444ee44444eeec88888888888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888844ee44444444444444ee4445555544455551114445ddee44444444444ee4444eeee888888888888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888884ee44444444444444ee444555555555555555555dddee44444444444ee4444eeec888888888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888844ee4444444444444e4444455555555555555555dd4ee44444444444ee444eee88888888888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888884ee4444444444444e444444555555511115555dd44ee44444444444ee44eeeffff88888888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888888ee4444444444444ee44444455dddd511dddddd444ee4444444444ee4eeeeffffffffc8888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888888ce4444444444444ee44444445dd444ddddbdd4444ee4444444444eeeeeeffffffffff8888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888ee444444444444ee44444444bd44455444db4444ee4444444444eeeecfffffffffffff88888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888888888e444444444444ee444444444444444444444444ee444444444eeeefffffffffffffffc8888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888888888884444444444ee444444444444444444444444ee4444444eeeeeffffffffffffffffff888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888884444444444ee44444444444444444444444ee44444eeeeefffffffffffffffffff8888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888888888888888e4444444ee4444444444444444444444ee444eeeeeefffffffffffffffffffff8888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888888888888888888e4444ee4444444444444444444444eeeeeeeefffffffffffffffffffffff88888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888888888888888888888feeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffc888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888fffffffffeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffff8888888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffff888888888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888888888888888888888888cffffffffffffffffffffffffffffffffffffffffffc888888888888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888888888888888888888888888cffcffffffffffffffffffffcc88888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886866666666666b9999888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886999999999999999999999999999999999999999999888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889999999999999999999999966666666666666688888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                `)
            myEnemy.setBounceOnWall(true)
            myEnemy.setPosition(randint(0, 160), randint(0, 120))
            myEnemy.setVelocity(75, 75)
        }
    }
})
function wait (int2: number) {
    pause(int2 * 1000)
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("You've found my easter egg and it's credits!")
    sprites.destroy(mySprite)
    sprites.destroy(myEnemy)
    textSprite = textsprite.create("Created by Arjun Das")
    textSprite.setIcon(img`
        4 1 1 1 4 
        1 4 4 4 1 
        1 1 1 1 1 
        1 4 4 4 1 
        1 4 4 4 1 
        1 4 4 4 1 
        1 4 4 4 1 
        `)
    textSprite.setPosition(80, 60)
    textSprite.setVelocity(0, -30)
    wait(2)
    textSprite = textsprite.create("Assets by MakeCode & AGS")
    textSprite.setScale(1, ScaleAnchor.Middle)
    textSprite.setIcon(img`
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f 2 2 2 2 2 f 7 7 7 7 7 f . . 
        . f 2 2 2 2 2 f 7 7 7 7 7 f . . 
        . f 2 2 2 2 2 f 7 7 7 7 7 f . . 
        . f 2 2 2 2 2 f 7 7 7 7 7 f . . 
        . f 2 2 2 2 2 f 7 7 7 7 7 f . . 
        . f f f f f f f f f f f f f . . 
        . f 6 6 6 6 6 f 5 5 5 5 5 f . . 
        . f 6 6 6 6 6 f 5 5 5 5 5 f . . 
        . f 6 6 6 6 6 f 5 5 5 5 5 f . . 
        . f 6 6 6 6 6 f 5 5 5 5 5 f . . 
        . f 6 6 6 6 6 f 5 5 5 5 5 f . . 
        . f f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    textSprite.setPosition(80, 60)
    textSprite.setVelocity(0, -30)
    wait(2)
    textSprite = textsprite.create("Duck Hunt by")
    textSprite.setScale(1, ScaleAnchor.Middle)
    textSprite.setIcon(img`
        . . . . . . . . . b 5 b . . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 b c 5 5 d 4 c . . 
        . b b b b 5 5 5 b f d d 4 4 4 b 
        . b d 5 b 5 5 b c b 4 4 4 4 b . 
        . . b 5 5 b 5 5 5 4 4 4 4 b . . 
        . . b d 5 5 b 5 5 5 5 5 5 b . . 
        . b d b 5 5 5 d 5 5 5 5 5 5 b . 
        b d d c d 5 5 b 5 5 5 5 5 5 b . 
        c d d d c c b 5 5 5 5 5 5 5 b . 
        c b d d d d d 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `)
    textSprite.setPosition(80, 60)
    textSprite.setVelocity(0, -30)
    textSprite = textsprite.create("Shigeru Miyamoto")
    textSprite.setScale(1, ScaleAnchor.Middle)
    textSprite.setIcon(img`
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
        `)
    textSprite.setPosition(80, 75)
    textSprite.setVelocity(0, -30)
    wait(2)
    textSprite = textsprite.create("Tetris by Alexey Pajitnov")
    textSprite.setScale(0.98, ScaleAnchor.Middle)
    textSprite.setIcon(img`
        f f f f f f . . . . . . . . . . 
        f 8 8 6 9 f . . . . . . . . . . 
        f 8 8 8 6 f . . . . . . . . . . 
        f 8 8 8 8 f . . . . . . . . . . 
        f 8 8 8 8 f . . . . . . . . . . 
        f f f f f f f f f f f f f f f f 
        f 8 8 6 9 f 8 8 6 9 f 8 8 6 9 f 
        f 8 8 8 6 f 8 8 8 6 f 8 8 8 6 f 
        f 8 8 8 8 f 8 8 8 8 f 8 8 8 8 f 
        f 8 8 8 8 f 8 8 8 8 f 8 8 8 8 f 
        f f f f f f f f f f f f f f f f 
        `)
    textSprite.setPosition(80, 60)
    textSprite.setVelocity(0, -30)
    wait(2)
    textSprite = textsprite.create(" Hosted on Github")
    textSprite.setScale(1, ScaleAnchor.Middle)
    textSprite.setIcon(img`
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 f 1 1 1 1 f 1 1 . . . 
        . . 1 1 f f f 1 1 f f f 1 1 . . 
        . 1 1 f f f f f f f f f f 1 1 . 
        1 1 1 f f f f f f f f f f 1 1 1 
        1 1 1 f f f f f f f f f f 1 1 1 
        1 1 f f f f f f f f f f f f 1 1 
        1 1 f f f f f f f f f f f f 1 1 
        1 1 f f f f f f f f f f f f 1 1 
        1 1 f f f f f f f f f f f f 1 1 
        1 1 f f f f f f f f f f f f 1 1 
        1 1 1 f f f f f f f f f f 1 1 1 
        . 1 1 1 f f f f f f f f 1 1 1 . 
        . . 1 1 1 f f f f f f 1 1 1 . . 
        . . . 1 1 1 f f f f 1 1 1 . . . 
        . . . . 1 1 f f f f 1 1 . . . . 
        `)
    textSprite.setPosition(80, 60)
    textSprite.setVelocity(0, -30)
    wait(2)
    sprites.destroy(textSprite)
    scene.setBackgroundImage(img`
        fffffffffffffffffffff55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffff55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffff5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffff
        fffffffffffffff55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffff
        ffffffffffffff5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffff
        fffffffffffff555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffff
        ffffffffffff55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffff
        fffffffffff5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffff
        ffffffffff555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffff
        fffffffff55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffffffffffffffffffffffffffffffff
        ffffffff5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffff
        fffffff555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffffffffffffffffffffffffffffff
        ffffff55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555fffffffffffffffffffffffffffff
        fffff5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffffffffffffffffffffffffffff
        ffff555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555fffffffffffffffffffffffffff
        fff55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffffffffffffffffffffffffff
        fff55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffffffffffffffffffffffffff
        ff5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555fffffffffffffffffffffffff
        f555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffffffffffffffffffffffff
        55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555551111115555555555555555555fffffffffffffffffffffff
        55555555555555111111111115555111111111155555555555555555555555555555555555555555555555555555555555555555555555511111111115555555555555555fffffffffffffffffffffff
        555555555555551111111111111111111111111555555555555111115555555555555551111155555555555555555555555555555555555111111111115555555555555555ffffffffffffffffffffff
        5555555555555511111111111111111111111115555555555551111155555555555555511111555555555555555555555555555555555551111111111115555555555555555fffffffffffffffffffff
        5555555555555511111111111111111111111115555555555551111155555555555555511111555555555555555555555555555555555551111111111111111111555555115111ffffffffffffffffff
        5555555555555511111111111111111111111115555555555551111155555555555555511111555555555555555555555555555555555551111111111111111111111111111511ffffffffffffffffff
        5555555555555555555551111111111115555555555555555551111155555555555555511111555555555555555555555555555555555555511111111111111111111111111151ffffffffffffffffff
        5555555555555555555555555111115555555555555555555551111115555555555555511111555555555555555555555555555555555555555111111111111111111111111151ffffffffffffffffff
        5555555555555555555555555111115555555555555555555551111115555555555555511111555555555555555555555555555555555555551111111111111111111111111115ffffffffffffffffff
        5555555555555555555555555111115555555555555555555551111115555555555555511111555555555555555555555555555555555555511111111555551111111111111115ffffffffffffffffff
        55555555555555555555555551111155555555555555555555511111155555555555555111111555555555555555555555555555555555555111111155555555551111111115555fffffffffffffffff
        55555555555555555555555551111155555555555555555555511111155555555555555111111555555555555555555555555555555555551111111155555555511111111155555fffffffffffffffff
        555555555555555555555555511111555555555555555555555511111555555555555551111115555555555555555555555555555555555111111115555555511111111115555555ffffffffffffffff
        555555555555555555555555111111555555555555555555555511111555555555555551111115555555555555555555555555555555555111111115555555111111111155555555ffffffffffffffff
        5555555555555555555555551111115555555555555555555555111111111111111111111111155555555555555555555555555555555511111111555555511111111115555555555fffffffffffffff
        5555555555555555555555551111115555555555555555555555111111111111111111111111155555555555555555555555555555555511111115555555111111111155555555555fffffffffffffff
        55555555555555555555555511111155555555555555555555551111111111111111111111111555555555555555555555555555555551111111155555111111111115555555555555ffffffffffffff
        55555555555555555555555511111155555555555555555555551111111111111111111111111555555555555555555555555555555511111111555555111111111555555555555555ffffffffffffff
        555555555555555555555555111111555555555555555555555511111111111111111111111115555555555555555555555555555551111111155555551111111155555555555555555fffffffffffff
        555555555555555555555555111111155555555555555555555511111555555555555555111115555555555555555555555555555551111111155555551111111555555555555555555fffffffffffff
        555555555555555555555555511111155555555555555555555511111555555555555555111115555555555555555555555555555551111111555555551111115555555555555555555fffffffffffff
        5555555555555555555555555111111555555555555555555551111115555555555555551111115555555555555555555555555555111111155555555511111555555555555555555555ffffffffffff
        5555555555555555555555555111111555555555555555555551111115555555555555551111115555555555555555555555555551111111555555555555555555555555555555555555ffffffffffff
        5555555555555555555555555511111555555555555555555551111115555555555555551111115555555555555555555555555511111111155555555555555555555555555555555555ffffffffffff
        55555555555555555555555555111115555555555555555555511111155555555555555511111155555555555555555555555551111111111555555555555555555555555555555555555fffffffffff
        55555555555555555555555555111115555555555555555555511111555555555555555551111155555555555555555555555511111111111155555555555555555555555555555555555fffffffffff
        55555555555555555555555555111115555555555555555555511111555555555555555551111155555555555555555555555111111111111155555555555555555555555555555555555fffffffffff
        555555555555555555555555551111155555555555555555555111115555555555555555511111555555555555555555555511111111111111155555555555555555555555555555555555ffffffffff
        555555555555555555555555551111155555555555555555555111115555555555555555511111555555555555555555555111111111111111115555555555555555555555555555555555ffffffffff
        555555555555555555555555551111155555555555555555555111115555555555555555511111555555555555555555551111111115511111111111111111115555555555555555555555ffffffffff
        555555555555555555555555551111155555555555555555555111115555555555555555511111555555555555555555551111111155511111111111111111115555555555555555555555ffffffffff
        5555555555555555555555555511111555555555555555555551111155555555555555555111115555555555555555555111111115555511111111111111111155555555555555555555555fffffffff
        5555555555555555555555555511111555555555555555555551111155555555555555555111115555555555555555555111111155555551111111111111111155555555555555555555555fffffffff
        5555555555555555555555555511111555555555555555555551111155555555555555555111115555555555555555551111111555555551111111111111111155555555555555555555555fffffffff
        5555555555555555555555555511111555555555555555555551111155555555555555555111115555555555555555551111111555555555555555555555555555555555555555555555555fffffffff
        5555555555555555555555555511111555555555555555555551111155555555555555555111115555555555555555511111115555555555555555555555555555555555555555555555555fffffffff
        5555555555555555555555555111111555555555555555555551111155555555555555555111115555555555555555511111115555555555555555555555555555555555555555555555555fffffffff
        55555555555555555555555551111115555555555555555555511111555555555555555551111155555555555555555111111555555555555555555555555555555555555555555555555555ffffffff
        55555555555555555555555111111115555555555555555555511111555555555555555551111155555555555555555111111115555555555555555555555555555555555555555555555555ffffffff
        55555555555555555555551111111115555555555555555555511111555555555555555551111155555555555555555111111111555555555555555555555555555555555555555555555555ffffffff
        55555555555555555555511111111155555555555555555555511111555555555555555551111155555555555555555111111111115555555555551111155555555555555555555555555555ffffffff
        55555555555555555551111111111155555555555555555555511111555555555555555551111155555555555555555511111111111155555555551111155555555555555555555555555555ffffffff
        55555555555555555511111111111555555555555555555555511111555555555555555555555555555555555555555551111111111115555555511111155555555555555555555555555555ffffffff
        55555555555555555511111111155555555555555555555555511111555555555555555555555555555555555555555555511111111111115555511111155555555555555555555555555555ffffffff
        55555555555555555511111111555555555555555555555555511111555555555555555555555555555555555555555555551111111111111111111111155555555555555555555555555555ffffffff
        55555555555555555511111115555555555555555555555555555555555555555555555555555555555555555555555555555511111111111111111111155555555555555555555555555555ffffffff
        55555555555555555511111555555555555555555555555555555555555555555555555555555555555555555555555555555555111111111111111111555555555555555555555555555555ffffffff
        55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555511111111111111111555555555555555555555555555555ffffffff
        55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555511111111111111555555555555355555555555555555ffffffff
        55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555551111111155555555555555555555555555555555ffffffff
        55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffffffff
        55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffffffff
        55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffffffff
        55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffffffff
        55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffffffff
        55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffffffff
        55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffffffff
        55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffffffff
        55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffffffff
        55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffffffff
        55555555555555555555555555555555555555555555555555555555551111115555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffffffff
        55555555555555555555555555555555555555555555555555555555551111115555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffffffff
        5555555555555555555555555555555555555555555555555555555555111111555555555555555555555555555555555555555555555555555555555555555555555555555555555555555fffffffff
        5555555555555555555555555555555555555555555555555555555555111111555555555555555555555555555555555555555555555555555555555555555555555555555555555555555fffffffff
        5555555555555555555555555555555555555555555555555555555555111111555555555555555555555555555555555555555555555555555555555555555555555555555555555555555fffffffff
        5555555555555555555555555555111111111115555555555555555555111111555555555555555555555555555555555555555555555555555555555555555555555555555555555555555fffffffff
        5555555555555555555555555511111111111111115555555555555555111111555555555555555555555555555555555555555555555555555555555555555555555555555555555555555fffffffff
        5555555555555555555555551111111111111111111555555555555555111111555555555555555555555555555555555555555555555555555555555555555555555555555555555555555fffffffff
        555555555555555555555551111111111111111111115555555555555511111155555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffffffffff
        555555555555555555555111111111111111111111115555555555555511111155555555555555555555555555555555555555551111155555555555555555555555555555555555555555ffffffffff
        555555555555555555551111111111115551111111115555555555555511111155555555555555555555555555555555555555551111155555555555555555555555555555555555555555ffffffffff
        555555555555555555551111111111111555111111115555555555555511111155111111115555555555555555555555555555551111155555555555555555555555555555555555555555ffffffffff
        55555555555555555551111111111111111111111111555555555555551111111111111111555555555555555555555555555555111115555555555555555555555555555555555555555fffffffffff
        55555555555555555551111111111111111111111111555555555555551111111111111111155555555555555555555555555555111115555555555555555555555555555555555555555fffffffffff
        55555555555555555511111115111111111111111115555555555555511111111111111111115555555555555555555555555555111111555555555555555555555555555555555555555fffffffffff
        5555555555555555551111111551111111111111115555555555555551111111111111111111555555555555555555555555555511111155555555555555555555555555555555555555ffffffffffff
        5555555555555555551111115555511111111111555555555555555551111111111111111111155555555555555555555555555511111155555555555555555555555555555555555555ffffffffffff
        5555555555555555511111115555555555555555555555555555555551111111111155111111115555555555555555555555555511111155555555555555555555555555555555555555ffffffffffff
        555555555555555551111115555555555555555555555555555555555111111111155551111111555555555555555555555555551111115555555555555555555555555555555555555fffffffffffff
        555555555555555551111115555555555555555555555555555555551111111111555551111111155555555555555555555555555111111555555555555555555555555555555555555fffffffffffff
        555555555555555551111115555555555555555555555555555555551111111115555555111111115555555555555555555555555111111555555555555555555555555555555555555fffffffffffff
        55555555555555555111115555555555555555555555555555555555111111111555555551111111155555555555555555555555511111155555555555555555555555555555555555ffffffffffffff
        55555555555555555111115555555555555555555555555555555551111111115555555551111111155555555555555551111115511111115555555555555555555555555555555555ffffffffffffff
        5555555555555555511111555555555555555555555555555555555111111111555555555511111115555555555555111111111551111111555555555555555555555555555555555fffffffffffffff
        5555555555555555511111555555555555555555555555555555555111111111555555555551111115555555555551111111111551111111555555555555555555555555555555555fffffffffffffff
        555555555555555551111155555555555555555555555555555555511111111555555555555111111555555555511111111111155111111155555555555555555555555555555555ffffffffffffffff
        555555555555555551111155555555555555555555555555555555111111111555555555555511111555555555111111111111155111111115555555555555555555555555555555ffffffffffffffff
        55555555555555555111115555555555555555555555555555555511111111155555555555551111155555555111111111111115511111111555555555555555555555555555555fffffffffffffffff
        55555555555555555111115555555555555555555555555555555511111111555555555555551111155555511111111111155555551111111155555555555555555555555555555fffffffffffffffff
        5555555555555555511111555555555555555555555555555555511111111155555555555555111115555111111111111155555555111111115555555555555555555555555555ffffffffffffffffff
        5555555555555555511111555555555555555555555555555555511111111155555555555555111111551111111111115555555551111111111555555555555555555555555555ffffffffffffffffff
        555555555555555551111115555555555555555555555555555551111111111555555555555511111155111111111115555555555111111111115555555555555555555555555fffffffffffffffffff
        555555555555555551111115555555555555555555555555555511111111111555555555555511111115111111111155555555555111111111111111555555555555555555555fffffffffffffffffff
        55555555555555555111111155555555555555555555555555551111111111155555555555551111111111111111155555555555511111111111111155555555555555555555ffffffffffffffffffff
        5555555555555555511111115555555555555555555555555555111111111115555555555555511111111111111155555555555511111111111111115555555555555555555fffffffffffffffffffff
        5555555555555555551111111555555555555555555555555555111111111115555555555555511111111111111115555111111111111151111111115555555555555555555fffffffffffffffffffff
        555555555555555555111111115555555555555555555555555111111555555555555555555551111111111111111115511111111111115511111111555555555555555555ffffffffffffffffffffff
        55555555555555555551111111111111111111111111111111111111155555555555555555555551111111111111111111111111111111555555555555555555555555555fffffffffffffffffffffff
        55555555555555555551111111111111111111111111111111111111155555555555555555555555555555111111111111111111111115555555555555555555555555555fffffffffffffffffffffff
        f555555555555555555511111111111111111111111111111111111115555555555555555555555555555551111111111111111111111555555555555555555555555555ffffffffffffffffffffffff
        `)
    wait(0.25)
    music.play(music.createSong(hex`00c8000408040108001c000e050046006603320000040a002d0000006400140001320002010002900000000400010504000800010608000c0001080c001000010a10001400010c14001800010d18001c00010f1c002000011120002400011224002800011428002c0001162c003000011830003400011934003800011b38003c00011d3c004000011e40004400012044004800012248004c0001244c005000012550005400012754005800012958005c00012a5c006000012c`), music.PlaybackMode.InBackground)
    game.gameOver(true)
})
let textSprite: TextSprite = null
let grid2 = 0
let mySprite: Sprite = null
let myEnemy: Sprite = null
myEnemy = sprites.create(img`
    f f f f f f . . . . . . . . . . 
    f 2 2 2 1 f . . . . . . . . . . 
    f 2 2 2 2 f . . . . . . . . . . 
    f 2 2 2 2 f . . . . . . . . . . 
    f 2 2 2 2 f . . . . . . . . . . 
    f f f f f f f f f f f f f f f f 
    f 2 2 2 1 f 2 2 2 1 f 2 2 2 1 f 
    f 2 2 2 2 f 2 2 2 2 f 2 2 2 2 f 
    f 2 2 2 2 f 2 2 2 2 f 2 2 2 2 f 
    f 2 2 2 2 f 2 2 2 2 f 2 2 2 2 f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Enemy)
mySprite = sprites.create(img`
    . . . . f f f f f f f . . . . 
    . . f f 1 1 1 1 1 1 1 f f . . 
    . f 1 1 f f f f f f f 1 1 f . 
    . 1 f f 2 2 f f f 2 2 f f 1 . 
    f 1 f 2 2 4 f f f 4 2 2 f 1 f 
    1 f 2 2 4 5 f f f 5 4 2 2 f 1 
    1 f 2 4 5 . f f f . 5 4 2 f 1 
    1 f f f f f 1 1 1 f f f f f 1 
    1 f f f f f 1 1 1 f f f f f 1 
    1 f f f f f 1 1 1 f f f f f 1 
    1 f 2 4 5 . f f f . 5 4 2 f 1 
    1 f 2 2 4 5 f f f 5 4 2 2 f 1 
    1 f f 2 2 4 f f f 4 2 2 f f 1 
    . 1 f f 2 2 f f f 2 2 f f 1 . 
    . 1 f f f f f f f f f f f 1 . 
    . . 1 1 f f f f f f f 1 1 . . 
    `, SpriteKind.Player)
myEnemy.setScale(1.75, ScaleAnchor.Middle)
mySprite.setScale(1.25, ScaleAnchor.Middle)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff455fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ee5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5cfffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe5557cccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe5555cccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe5557cccccffffcfffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffff
    fffffffff55feffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff557cccccccffcccffffffffffffffffffffffffffffffffffffffffffffff45ffffffffffffffffffff
    fffffff555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55ccccccccfffffffffffffffffffffffffffffffffffffffffffffffff5555554fffffffffffffffff
    fffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ccccccccffffccfffffffffffffffffffffffffffffffffffffffffff555554ffffffffffffffffff
    fffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccfffccfffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffff
    fffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccfffffffffffffffffffffffffffffffffffffffffffffffff55555efffffffffffffffff
    ffffffff55ff5efffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffff555ff55fffffffffffffffff
    ffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe444eccccccceccecccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeee444444eeee4cceceeceeec4efeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe5554444eeee444ee44eee4eee44444eefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444ee4eeeeee4444ee4444ee44eee44444eeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe444444eeeeee44444eee4444eee444ee44444ee4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44444444eeeeeee4444ee444444ee444eeee44eee4444fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444eee444eee44ee4444444ee4444eeeeeee4444444fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444eee444444eeeee4444eeeeeeeee4eeee44444444444fffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444eee44444444eeeeeeeeeee4eeeeeeeeee444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff444444444ee44444444444eeeeeee44444ee44444eee444444444444fffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff444444444ee44444444444ee44444444444ee444444ee4444444444444ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff444444444ee444444444444ee444444444444ee444444ee444444444444ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff44444444ee444444444444ee4444444444444ee4444444ee444444444444fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff44444444ee4444444444444ee4444444444444ee4444444ee444444444444effffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffe4444444eee444444444444eee44444444444444ee4444444ee444444444444ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff44444444ee44444444444411d44444444444444d1d4444444ee444444444444efffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff44444444ee444444444444111dd444444444444d11ddb444444ee444444444444fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff44444444ee44444444444d115ddd444444444441155ddb44444ee4444444444444ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff44444444ee44444444444411555dd4444444444115555dd444444ee444444444444efffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff44444444ee444444444441155555dd4444444431555555dd44444ee4444444444444effffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff4444444ee4444444444445555555dd4444444445554e45dd444444ee444444444444effffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff4444444ee44444444444555ee455dd4444444455554ee55dd44444ee444444444444effffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff4444444ee444444444444454ee44ddd44444444545544eeddb44444ee444444444444effffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff4444444ee44444444444444ee44444444444444444444ee444444444ee44444444444eefffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff4444444ee44444444444444ee44444444444444444444ee444444444ee44444444444eefffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff444444ee444444444444444ee44444444444444444444ee4444444444ee4444444444eefffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff444444ee44444444444444ee444444444411d444444444e4444444444ee4444444444eefffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff444444ee44444444444444ee444444444111dd44444444ee444444444ee4444444444eefffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff44444ee444444444444444ee444444444115dd44444444ee444444444ee4444444444eefffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff44444ee444444444444444e44444444411555dd4444444ee4444444444ee444444444eefffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff44444ee44444444444444ee4444444441d555dd4444444ee4444444444ee44444444eeefffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff44444ee44444444444444ee444444445dddddddd444444eed444444444ee44444444eeecccccccccccccc88888888888888888888888888888
    888888888888888888888888888888888888888888888844444e444444444444444e51d4444445dddddddd444444edd4444444444e4444444eeee8888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888c444ee444444444444444e511144444444444444444444ddd4444444444e4444444eeec8888888888888888888888888888888888888888888
    888888866b9999999999999999999999999999999988888444ee44444444444444ee55111d444444444444444454dd44444444444ee444444eee88888888888888888888888888888888888888888888
    99999999999999999999999999999999999999999968888444ee44444444444444ee4555111d444444444444455ddb44444444444ee44444eeee88888888888888888888888888888888888888888888
    99996666688888888888888888888888888888888888888844ee44444444444444ee4455551144444444444445ddde44444444444ee44444eeec88888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888844ee44444444444444ee4445555544455551114445ddee44444444444ee4444eeee888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888884ee44444444444444ee444555555555555555555dddee44444444444ee4444eeec888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888844ee4444444444444e4444455555555555555555dd4ee44444444444ee444eee88888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888884ee4444444444444e444444555555511115555dd44ee44444444444ee44eeeffff88888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888ee4444444444444ee44444455dddd511dddddd444ee4444444444ee4eeeeffffffffc8888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888ce4444444444444ee44444445dd444ddddbdd4444ee4444444444eeeeeeffffffffff8888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888ee444444444444ee44444444bd44455444db4444ee4444444444eeeecfffffffffffff88888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888e444444444444ee444444444444444444444444ee444444444eeeefffffffffffffffc8888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888888884444444444ee444444444444444444444444ee4444444eeeeeffffffffffffffffff888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888884444444444ee44444444444444444444444ee44444eeeeefffffffffffffffffff8888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888e4444444ee4444444444444444444444ee444eeeeeefffffffffffffffffffff8888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888e4444ee4444444444444444444444eeeeeeeefffffffffffffffffffffff88888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888feeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffc888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888fffffffffeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffff8888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffff888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888888cffffffffffffffffffffffffffffffffffffffffffc888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888888888888888888888888cffcffffffffffffffffffffcc88888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886866666666666b9999888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886999999999999999999999999999999999999999999888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889999999999999999999999966666666666666688888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    `)
myEnemy.setBounceOnWall(true)
myEnemy.setPosition(randint(0, 160), randint(0, 120))
myEnemy.setVelocity(75, 75)
