export function LogExecutionTime() {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = async function (...args: any[]){
            const startTime = Date.now();
            const result = await originalMethod.apply(this, args);
            const endTime = Date.now();
            const executionTime = endTime - startTime;
            console.log(`Method ${propertyKey}, ExecutionTime: ${executionTime}ms`);
        };

        return descriptor;
    }
}