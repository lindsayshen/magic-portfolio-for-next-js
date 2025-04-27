import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { getPosts } from "@/app/utils/utils";
import {
  AvatarGroup,
  Button,
  Column,
  Flex,
  Heading,
  SmartImage,
  SmartLink,
  Text,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
import { formatDate } from "@/app/utils/formatDate";
import ScrollToHash from "@/components/ScrollToHash";

interface WorkParams {
  params: {
    slug: string;
  };
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "work", "projects"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params: { slug } }: WorkParams) {
  let post = getPosts(["src", "app", "work", "projects"]).find(
    (post) => post.slug === slug
  );

  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    images,
    image,
    team,
  } = post.metadata;
  let ogImage = image
    ? `https://${baseURL}${image}`
    : `https://${baseURL}/og?title=${title}`;

  return {
    title,
    description,
    images,
    team,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://${baseURL}/work/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Project({ params }: WorkParams) {
  let post = getPosts(["src", "app", "work", "projects"]).find(
    (post) => post.slug === params.slug
  );

  const allPosts = getPosts(["src", "app", "work", "projects"]);
  const currentIndex = allPosts.findIndex((p) => p.slug === params.slug);
  const nextPost =
    currentIndex >= 0 && currentIndex < allPosts.length - 1
      ? allPosts[currentIndex + 1]
      : null;
  const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  if (!post) {
    notFound();
  }

  const avatars =
    post.metadata.team?.map((person) => ({
      src: person.avatar,
    })) || [];

  return (
    <Column as="section" maxWidth="s" horizontal="center" gap="l">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `https://${baseURL}${post.metadata.image}`
              : `https://${baseURL}/og?title=${post.metadata.title}`,
            url: `https://${baseURL}/work/${post.slug}`,
            author: {
              "@type": "Person",
              name: person.name,
            },
          }),
        }}
      />
      <Column maxWidth="s" gap="16">
        {/* <Button
          href="/work"
          variant="tertiary"
          weight="default"
          size="l"
          prefixIcon="chevronLeft"
        >
          Projects
        </Button> */}

        <Heading variant="display-strong-s">{post.metadata.title}</Heading>
      </Column>

      {post.metadata.images.length > 0 && (
        <img
          src={post.metadata.images[0]}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "var(--radius-m)",
            objectFit: "cover",
          }}
        />
      )}
      <Column style={{ margin: "auto", width: "100%" }} as="article">
        <Flex gap="12" marginBottom="24" vertical="center">
          {post.metadata.team && (
            <AvatarGroup reverse avatars={avatars} size="m" />
          )}
          <Text variant="body-default-s" onBackground="neutral-weak">
            {formatDate(post.metadata.publishedAt)}
          </Text>
        </Flex>
        <CustomMDX source={post.content} />
      </Column>

      <Flex fillWidth horizontal="end">
        <Button
          variant="primary"
          size="s"
          weight="default"
          prefixIcon="arrowUp"
          href="#"
        >
          Back to top
        </Button>
      </Flex>

      {(previousPost || nextPost) && (
        <Flex fillWidth horizontal="space-between">
          {previousPost ? (
            <Button
              href={`/work/${previousPost.slug}`}
              prefixIcon="chevronLeft"
              variant="tertiary"
              weight="default"
              size="l"
              style={{
                justifyContent: "flex-start", // push icon + text left
                paddingLeft: "0", // remove left padding
              }}
            >
              {previousPost.metadata.title.split(":")[0]}
            </Button>
          ) : (
            <div />
          )}

          {nextPost ? (
            <Button
              href={`/work/${nextPost.slug}`}
              suffixIcon="chevronRight"
              variant="tertiary"
              weight="default"
              size="l"
              style={{
                justifyContent: "flex-end", // push text + icon to the right
                paddingRight: "0", // remove right padding
              }}
            >
              {nextPost.metadata.title.split(":")[0]}
            </Button>
          ) : (
            <div />
          )}
        </Flex>
      )}

      <ScrollToHash />
    </Column>
  );
}
