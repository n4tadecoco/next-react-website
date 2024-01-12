import { getPostBySlug } from 'lib/api'
import Container from 'components/container'
import PostHeader from 'components/post-body'

export default function Schedule({
    title,
    publish,
    content,
    eyecatch,
    categories,
}) {
    return (
    <Container>
        <article>
            <PostHeader title={title} subtitle="Blog Artcle" publish={publish} />
        </article>
        </Container>
        )
}