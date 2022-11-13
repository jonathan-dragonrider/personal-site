import type { LoadEvent } from "@sveltejs/kit"

/** @type {import('./$types').PageLoad} */

export async function load({ params }: LoadEvent){
  const post = await import(`../${params.slug}.md`)
  const { title, date } = post.metadata
  const content = post.default

  return {
    content,
    title,
    date,
  }
}