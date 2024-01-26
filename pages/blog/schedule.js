import { getPostBySlug } from 'lib/api'
import { extractText } from 'lib/extract-text'
import Meta from 'components/meta'
import Container from 'components/container'
import PostHeader from 'components/post-header'
import PostBody from 'components/post-body'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'
import ConvertBody from 'components/post-body'
import Image from 'next/image'
import PostCategories from 'components/post-categories'

// ローカルの代替案アイキャッチ画像
import { eyecatchLocal } from 'lib/constants'

export default function Schedule({
    title,
    publish,
    content,
    eyecatch,
    categories,
    description,
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
        </article>
        </Container>
        )
}

export async function getStaticProps() {
    const slug = 'schedule'

    const post = await getPostBySlug(slug)

    const description
}