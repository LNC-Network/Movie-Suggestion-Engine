// complex_calculation.ts

export async function complexCalculation(numbers: number[] | null): Promise<number> {
    if (numbers === null || numbers.length !== 2) {
        throw new Error("Array must contain exactly two numbers");
    }
    const [a, b] = numbers;
    
    //simulate complex calculation
    await new Promise(resolve => setTimeout(resolve, 3000));

    const result = a + b;

    return result;
}

