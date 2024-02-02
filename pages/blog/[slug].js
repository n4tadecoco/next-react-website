import { getPostBySlug, getAllSlugs } from 'lib/api'
import { extractText } from 'lib/extract-text'
import { prevNextPost } from 'lib/prev-next-post'
import Meta from 'components/meta'
import Container from 'components/container'
import PostHeader from 'components/post-header'
import PostBody from 'components/post-body'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'
import ConvertBody from 'components/post-body'
import Image from 'next/image'
import PostCategories from 'components/post-categories'
import { getPlaiceholder } from  'plaiceholder'

// ローカルの代替アイキャッチ画像
import { eyecatchLocal } from 'lib/constants'
import { Dawning_of_a_New_Day } from 'next/font/google'

export default function Post({
    title,
    publish,
    content,
    eyecatch,
    categories,
    description,
    prevPost,
    nextPost,
}) {
    return (
    <Container>
        <Meta
            pageTitle={title}
            pageDesc={description}
            pageImg={eyecatch.url}
            pageImgW={eyecatch.width}
            pageImgH={eyecatch.height}
            />

        <article>
            <PostHeader title={title} subtitle="Blog Artcle" publish={publish} />

            <figure>
                <Image
                src={eyecatch.url}
                alt=""
                layout="responsive"
                width={eyecatch.width}
                height={eyecatch.height}
                sizes="(min-width: 1152px) 1152px, 100vm"
                priority
                placeholder="blur"
                blurDataURL={eyecatch.blurDataURL}
                />
            </figure>

            <TwoColumn>
                <TwoColumnMain>
                    <PostBody>
                        <ConvertBody contentHTML={content} />
                    </PostBody>
                </TwoColumnMain>
                <TwoColumnSidebar>
                    <PostCategories categories={categories} />
                </TwoColumnSidebar>
            </TwoColumn>
            <div>{prevPost.title} {prevPost.slug}</div>
            <div>{nextPost.title} {nextPost.slug}</div>
        </article>
        </Container>
        )
}

export async function getStaticProps() {
    const allSlugs = await getAllSlugs()
    return {
        paths: allSlugs.map(({ slug }) => '/blog/${slug}'),
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const slug = context.params.slug

    const post = await getPostBySlug(slug)

    const description = extractText(post.content)

    const eyecatch = post.eyecatch ?? eyecatchLocal

    const { base64 } = await getPlaiceholder(eyecatch.url)
    eyecatch.blurDataURL = base64

    const allSlugs = await getAllSlugs()
    const [prevPost, nextPost] = prevNextPost(allSlugs, slug)

return {
    props: {
        title: post.title,
        publish: post.publishDate,
        content: post.content,
        eyecatch: eyecatch,
        categories: post.categories,
        description: description,
        prevPost: prevPost,
        nextPost: nextPost,
    },
}
}