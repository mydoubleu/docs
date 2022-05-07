import{r as e,o as l,c as t,a as n,d as c,F as p,b as s,e as r}from"./app.3826fdf0.js";import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";const i={},b=n("h1",{id:"gitlab-\u1109\u1165\u11AF\u110E\u1175-docker",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#gitlab-\u1109\u1165\u11AF\u110E\u1175-docker","aria-hidden":"true"},"#"),s(" Gitlab \uC124\uCE58 (Docker)")],-1),u={href:"https://docs.gitlab.com/omnibus/docker/#install-gitlab-using-docker-engine",target:"_blank",rel:"noopener noreferrer"},d=s("https://docs.gitlab.com/omnibus/docker/#install-gitlab-using-docker-engine"),m=r(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>// \uCD5C\uC2E0 \uBC84\uC804
<span class="token function">docker</span> pull gitlab/gitlab-ce:latest
// \uD2B9\uC815 \uBC84\uC804
<span class="token function">docker</span> pull gitlab/gitlab-ce:13.8.3-ce.0
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> /opt/gitlab
<span class="token function">docker</span> run --detach <span class="token punctuation">\\</span>
  --hostname gitlab.woojuin.net <span class="token punctuation">\\</span>
  --publish <span class="token number">5859</span>:443 --publish <span class="token number">5858</span>:80 --publish <span class="token number">5857</span>:22 <span class="token punctuation">\\</span>
  --name gitlab <span class="token punctuation">\\</span>
  --restart always <span class="token punctuation">\\</span>
  --volume /opt/gitlab/config:/etc/gitlab <span class="token punctuation">\\</span>
  --volume /opt/gitlab/logs:/var/log/gitlab <span class="token punctuation">\\</span>
  --volume /opt/gitlab/data:/var/opt/gitlab <span class="token punctuation">\\</span>
  gitlab/gitlab-ce:latest
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\uC811\uC18D URL \uC124\uC815</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vi</span> /opt/gitlab/config/gitlab.rb
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>external_url &#39;https://gitlab.woojuin.net&#39;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> restart gitlab
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\uAD00\uB9AC\uC790 ID: root</p><p>\uBC29\uD654\uBCBD \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>firewall-cmd --permanent --zone<span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">5859</span>/tcp
firewall-cmd --reload
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,9);function g(k,h){const a=e("ExternalLinkIcon");return l(),t(p,null,[b,n("p",null,[n("a",u,[d,c(a)])]),m],64)}var f=o(i,[["render",g]]);export{f as default};
