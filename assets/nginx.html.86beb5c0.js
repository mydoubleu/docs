import{r,o as l,c as i,a as n,d as a,F as p,b as s,e as c}from"./app.3826fdf0.js";import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";const o={},b=n("h1",{id:"nginx-\u1109\u1165\u11AF\u110E\u1175",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nginx-\u1109\u1165\u11AF\u110E\u1175","aria-hidden":"true"},"#"),s(" Nginx \uC124\uCE58")],-1),d={href:"https://docs.nginx.com/nginx/admin-guide/installing-nginx/installing-nginx-open-source/#prebuilt_redhat",target:"_blank",rel:"noopener noreferrer"},u=s("https://docs.nginx.com/nginx/admin-guide/installing-nginx/installing-nginx-open-source/#prebuilt_redhat"),m=n("br",null,null,-1),g={href:"http://nginx.org/en/linux_packages.html#RHEL-CentOS",target:"_blank",rel:"noopener noreferrer"},h=s("http://nginx.org/en/linux_packages.html#RHEL-CentOS"),_=c(`<h2 id="\u110C\u1165\u110C\u1161\u11BC\u1109\u1169-\u1109\u1165\u11AF\u110C\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u110C\u1165\u110C\u1161\u11BC\u1109\u1169-\u1109\u1165\u11AF\u110C\u1165\u11BC" aria-hidden="true">#</a> \uC800\uC7A5\uC18C \uC124\uC815</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vi</span> /etc/yum.repos.d/nginx.repo
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[nginx]
name=nginx repo
baseurl=https://nginx.org/packages/mainline/centos/7/$basearch/
gpgcheck=0
enabled=1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u1109\u1165\u11AF\u110E\u1175-\u1106\u1175\u11BE-\u1109\u1165\u11AF\u110C\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1109\u1165\u11AF\u110E\u1175-\u1106\u1175\u11BE-\u1109\u1165\u11AF\u110C\u1165\u11BC" aria-hidden="true">#</a> \uC124\uCE58 \uBC0F \uC124\uC815</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum -y <span class="token function">install</span> nginx
systemctl <span class="token builtin class-name">enable</span> nginx
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vi</span> /etc/nginx/conf.d/default.conf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>server {
    listen 80;
    server_name *.woojuin.net;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name www.woojuin.net;
    client_max_body_size 0;
    ssl_certificate /etc/nginx/certs/woojuin.net/fullchain.pem;
    ssl_certificate_key /etc/nginx/certs/woojuin.net/woojuin.net.key;
    #ssl_dhparam /etc/nginx/cert/dhparam.pem;
    #ssl_session_cache shared:SSL:10m;
    #ssl_session_timeout 10m;
    ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3;
    ssl_ciphers EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH;
    ssl_prefer_server_ciphers on;
    #add_header Strict-Transport-Security &quot;max-age=31536000&quot;;
    #add_header X-Content-Type-Options nosniff;

    location / {
        proxy_pass https://192.168.0.2:8006;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # Websocket support
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection &quot;upgrade&quot;;
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>proxy_pass \uC0AC\uC6A9\uC2DC warn \uBC1C\uC0DD\uC2DC http \uC548\uC5D0 \uCD94\uAC00</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vi</span> /etc/nginx/nginx.conf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    # buffer size
    proxy_buffering   on;
    proxy_buffer_size    1024k;
    proxy_buffers        1024   1024k;
    client_body_buffer_size 1024k;
    proxy_busy_buffers_size 1024k;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl restart nginx
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\uB85C\uCEEC\uB85C \uD504\uB85D\uC2DC \uD558\uB294 \uACBD\uC6B0 \uD37C\uBBF8\uC158 \uC5D0\uB7EC \uB0A0\uB54C \uC544\uB798 \uC2E4\uD589</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>setsebool -P httpd_can_network_connect <span class="token number">1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u1107\u1161\u11BC\u1112\u116A\u1107\u1167\u11A8-\u1109\u1165\u11AF\u110C\u1165\u11BC-optional" tabindex="-1"><a class="header-anchor" href="#\u1107\u1161\u11BC\u1112\u116A\u1107\u1167\u11A8-\u1109\u1165\u11AF\u110C\u1165\u11BC-optional" aria-hidden="true">#</a> \uBC29\uD654\uBCBD \uC124\uC815 (Optional)</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>firewall-cmd --permanent --add-service<span class="token operator">=</span>http
firewall-cmd --permanent --add-service<span class="token operator">=</span>https
firewall-cmd --reload
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,15);function x(v,f){const e=r("ExternalLinkIcon");return l(),i(p,null,[b,n("p",null,[n("a",d,[u,a(e)]),m,n("a",g,[h,a(e)])]),_],64)}var w=t(o,[["render",x]]);export{w as default};
