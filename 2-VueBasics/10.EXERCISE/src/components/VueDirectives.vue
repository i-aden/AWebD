<script>
    num_letters = 26; // Fix This!

    const git_tutorial_link = "https://www.atlassian.com/git/tutorials";

     showQuote() {
      const random_number = Math.random();

      if (random_number <= 0.5) {
        return "To be or not to be, that is the question!";
      } {
        return "Whatever you can do or dream you can, begin it. Boldness has genius, power, and magic in it. --Geothe";
      }
    }

    const html_from_some_database = "<h1>This should be interpreted as HTML</h1>";
</script>

<template>
  <div>
    <h1>Memorable Quotes</h1>
    <p>{ showQuote }</p>  <!--Fix This! -->
    <h1>There are { num_letters } letters in the alphabet.</h1>
    <p>
      Visit the Atlassian website for
      <a ?href="git_tutorial_link">git tutorials</a>. <!--Fix This! Replace the question mark with something. Hint: There are 2 possibilities. -->
    </p>

    <p html="html_from_some_database"></p> <!--Fix This HTML binding! -->
  </div>
</template>

<style>
p {
  font-size: 1.25rem;
  font-weight: bold;
  border: 1px solid burlywood;
  background-color: #4f5ac0;
  color: white;
  padding: 0.5rem;
}
h1 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #c0694f;
  margin: 0 0 1rem 0;
}
</style>
