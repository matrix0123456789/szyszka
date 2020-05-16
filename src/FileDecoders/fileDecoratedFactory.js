export async function fileDecoratedFactory(file) {
    const {PsdFile} = await import("./psd/PsdFile");
    return PsdFile.fromFile(file);
}