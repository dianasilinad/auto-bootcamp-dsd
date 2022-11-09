import { getRectangleArea, getRectangleInfo, getRectanglePerimeter } from "../js/rectangle.js"

test('should calculate the correct perimeter of the rectangle', () => {
    const perimeter = getRectanglePerimeter(6, 9);
    expect(perimeter).toBe(30);
});
test('should calculate the correct are of the rectangle', () => {
    const area = getRectangleArea(6, 9);
    expect(area).toBe(54);
});
test('should print out the correct perimeter and area of the rectangle ', () => {
    const perimeter = getRectanglePerimeter(6, 9);
    const area = getRectangleArea(6, 9);
    const info = (`The perimeter of a rectangle is ${perimeter} and the area is ${area}`);
    expect(info).toBe(`The perimeter of a rectangle is ${30} and the area is ${54}`);
});
