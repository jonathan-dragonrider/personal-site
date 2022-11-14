<script>
  let posts = [
    {
      title: '1',
      description: 'description',
      pubDate: '9/1/2022',
      author: 'Jon Kline',
      content: `
        Candy jujubes macaroon ice cream toffee jelly-o. Candy fruitcake jelly beans cake cotton candy fruitcake pie. Gummi bears sweet roll sesame snaps toffee croissant lemon drops.

        Oat cake jujubes icing halvah fruitcake jelly-o. Gingerbread muffin cake jelly tiramisu cheesecake. Chocolate sweet chocolate cake jujubes gummi bears. Sesame snaps liquorice dessert danish gummies sugar plum.

        Macaroon candy shortbread sweet bear claw soufflé shortbread marshmallow chocolate cake. Lemon drops cookie sweet roll pudding chupa chups oat cake toffee powder. Dessert carrot cake cookie pudding candy canes soufflé bear claw chocolate cake gingerbread.

        Tootsie roll lemon drops brownie jelly beans soufflé chocolate tootsie roll powder gummi bears. Jujubes candy canes tart muffin gingerbread toffee marzipan. Sweet roll halvah donut soufflé ice cream ice cream cupcake shortbread.

        Apple pie jelly beans cake carrot cake lollipop. Powder topping bonbon dessert bonbon gummi bears jujubes. Jelly gummies bonbon sweet gingerbread shortbread donut biscuit cupcake. Jelly beans brownie cupcake chocolate sugar plum jelly beans cake toffee gingerbread.
      `
    }
  ]
</script>

<h1>Blog</h1>

{#each posts as post }
<a href="/blog/{post.title}">
  <h2>{post.title}</h2>
  <p>{post.description}</p>
  <p>{post.pubDate}</p>
</a>
{/each}

<style>
  a {
    padding: 20px;
  }
  
  a:hover {
    background-color: lightgray;
  }
</style>