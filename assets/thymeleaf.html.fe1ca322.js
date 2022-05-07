import{r as a,o as t,c as r,a as e,d as l,F as i,b as n,e as o}from"./app.3826fdf0.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";const m={},c=e("h1",{id:"thymeleaf-\u1100\u1175\u1107\u1169\u11AB-\u1109\u1165\u11AF\u110C\u1165\u11BC",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#thymeleaf-\u1100\u1175\u1107\u1169\u11AB-\u1109\u1165\u11AF\u110C\u1165\u11BC","aria-hidden":"true"},"#"),n(" Thymeleaf \uAE30\uBCF8 \uC124\uC815")],-1),h={href:"https://docs.spring.io/spring-boot/docs/2.0.9.RELEASE/reference/htmlsingle/#common-application-properties",target:"_blank",rel:"noopener noreferrer"},d=n("https://docs.spring.io/spring-boot/docs/2.0.9.RELEASE/reference/htmlsingle/#common-application-properties"),f=o(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># THYMELEAF (ThymeleafAutoConfiguration)
spring.thymeleaf.cache=true # Whether to enable template caching.
spring.thymeleaf.check-template=true # Whether to check that the template exists before rendering it.
spring.thymeleaf.check-template-location=true # Whether to check that the templates location exists.
spring.thymeleaf.enabled=true # Whether to enable Thymeleaf view resolution for Web frameworks.
spring.thymeleaf.enable-spring-el-compiler=false # Enable the SpringEL compiler in SpringEL expressions.
spring.thymeleaf.encoding=UTF-8 # Template files encoding.
spring.thymeleaf.excluded-view-names= # Comma-separated list of view names (patterns allowed) that should be excluded from resolution.
spring.thymeleaf.mode=HTML # Template mode to be applied to templates. See also Thymeleaf&#39;s TemplateMode enum.
spring.thymeleaf.prefix=classpath:/templates/ # Prefix that gets prepended to view names when building a URL.
spring.thymeleaf.reactive.chunked-mode-view-names= # Comma-separated list of view names (patterns allowed) that should be the only ones executed in CHUNKED mode when a max chunk size is set.
spring.thymeleaf.reactive.full-mode-view-names= # Comma-separated list of view names (patterns allowed) that should be executed in FULL mode even if a max chunk size is set.
spring.thymeleaf.reactive.max-chunk-size=0 # Maximum size of data buffers used for writing to the response, in bytes.
spring.thymeleaf.reactive.media-types= # Media types supported by the view technology.
spring.thymeleaf.servlet.content-type=text/html # Content-Type value written to HTTP responses.
spring.thymeleaf.suffix=.html # Suffix that gets appended to view names when building a URL.
spring.thymeleaf.template-resolver-order= # Order of the template resolver in the chain.
spring.thymeleaf.view-names= # Comma-separated list of view names (patterns allowed) that can be resolved.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,1);function b(u,g){const s=a("ExternalLinkIcon");return t(),r(i,null,[c,e("p",null,[e("a",h,[d,l(s)])]),f],64)}var x=p(m,[["render",b]]);export{x as default};
