export default function({ $axios }) {
    $axios.onRequest((config) => {
        if (process.env.QITTA_TOKEN) {
            config.headers.common['Authorization'] = process.env.QITTA_TOKEN
        }
        return config
    })
}