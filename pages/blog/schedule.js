export default function Schedule() {
    return <h1>記事のタイトル</h1>
}

export async function getStaticProps() {
    console.log('処理1')
    setTimeout(() => console.log('処理2'), 1000)
    console.log('処理3')

    return {
        props: {},
    }
}