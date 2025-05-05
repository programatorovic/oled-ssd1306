// Nové bloky pre MakeCode rozšírenie OLED
namespace oled {

    // PixelOn - Aktivuje pixel na daných súradniciach
    // % x.min=0 x.max=127
    // % y.min=0 y.max=63
    //% blockId="oled_pixel_on" block="PixelOn x %x y %y"
    export function pixelOn(x: number, y: number): void {
        drawPixel(x, y, 1);
        show();
    }

    // PixelOff - Deaktivuje pixel na daných súradniciach
    //% blockId="oled_pixel_off" block="PixelOff x %x y %y"
    export function pixelOff(x: number, y: number): void {
        drawPixel(x, y, 0);
        show();
    }

    // PixelXor - XOR operácia na pixel
    //% blockId="oled_pixel_xor" block="PixelXor x %x y %y"
    export function pixelXor(x: number, y: number): void {
        let currentPixel = getPixel(x, y);
        drawPixel(x, y, currentPixel ^ 1);
        show();
    }
}
