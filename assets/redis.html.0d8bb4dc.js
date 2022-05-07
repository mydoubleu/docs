import{e as s}from"./app.3826fdf0.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";const n={},a=s(`<h1 id="redis-\u1109\u1165\u11AF\u110E\u1175" tabindex="-1"><a class="header-anchor" href="#redis-\u1109\u1165\u11AF\u110E\u1175" aria-hidden="true">#</a> Redis \uC124\uCE58</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> epel-release yum-utils
yum <span class="token function">install</span> http://rpms.remirepo.net/enterprise/remi-release-7.rpm
yum-config-manager --enable remi
yum <span class="token function">install</span> redis
<span class="token function">vi</span> /etc/redis.conf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>bind * -::*
requirepass [PASSWORD]
appendonly yes
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> redis
systemctl start redis
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,4);function r(l,i){return a}var t=e(n,[["render",r]]);export{t as default};
