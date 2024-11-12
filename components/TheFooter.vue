<template>
  <footer p="y15 x15" flex="~ col gap4">
    <div flex="~ row gap2" items-center>
      <p text-true-gray:90 text-sm>
        Data provided by&nbsp;
        <a op100 target="_blank" href="https://www.themoviedb.org/" title="The Movie Database" rel="noopener" n-link-text>
          <IconTMDB inline h4 />
        </a>
      </p>
    </div>
    <div flex="~ row gap2" items-center>
      <p text-true-gray:90 text-sm>
        This project uses the TMDB API but is not endorsed or certified by TMDB.
      </p>
    </div>
    <div flex gap4 items-center>
      <ExternalLinks
        :links="{
          twitter_id: 'myevmmedia',
          github_id: 'myevm-dev',
        }"
      >
      </ExternalLinks>

      <LanguageSwitcher />
    </div>
  </footer>
</template>
