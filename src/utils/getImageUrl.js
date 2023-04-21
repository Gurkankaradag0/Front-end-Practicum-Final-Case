const imagePaths = () => {
    const _imagePaths = []
    Object.values(import.meta.glob("~/assets/*", { eager: true })).forEach(
        ({ default: path }) => {
            const url = new URL(path, import.meta.url);
            const data = {
                model: url.pathname.split('.')[0].split('/')[url.pathname.split('.')[0].split('/').length - 1].replaceAll('_', ' '),
                path: url.pathname
            }
            _imagePaths.push(data)
        }
    )
    return _imagePaths
}

export default imagePaths