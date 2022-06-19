import { TranspileOptions, transpileModule } from "typescript"

function tsCompile(source: string, options: TranspileOptions = {}): string {
    return transpileModule(source, options).outputText;
}

const tsCode = "let foo: string  = 'bar'"

const jsCode = tsCompile(tsCode)

console.log(jsCode)