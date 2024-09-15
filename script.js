document.addEventListener('DOMContentLoaded', function() {

    const imageLinks = [
        //{ "src": "images/image1.jpg", "url": "link", "type": "n" },
        { "src": "images/image34.jpg", "url": "https://noclip.website/#TeamFortress2/pass_district;ShareData=AZ60s9kk?n8b4J@T6}~M=6Svh5:b^oUjzL~T!&b0V4t4-8|tGsT@Rkd927mbWq", "type" : "n" },
        { "src": "images/image33.jpg", "url": "https://noclip.website/#TeamFortress2/pass_district;ShareData=ACRLL9p,Fw8{UnrUZkW,=rlj?Qr9GKUpW6sT{C7:VvG;b9s-_~UPc-g9tV38Wq", "type": "n" },
        { "src": "images/image32.jpg", "url": "https://noclip.website/#klonoa/s413;ShareData=AG;d_UO_CvT/[Nq9y=2t=M?V;Q$eKTUXIP_T3I!w969{bUszoL87YMlT{rD|+^", "type": "n" },
        { "src": "images/image31.jpg", "url": "https://noclip.website/#klonoa/s410;ShareData=AOrhBUb]o~70WN=8nswQVLpDzQ-+9gUo{+58k@5AVwqtlTrn!sTrTTDUY1F;Vt", "type": "n" },
        { "src": "images/image30.jpg", "url": "https://noclip.website/#klonoa/s314;ShareData=AWYS{S^}z4T_!Bn9qVCz=Q)mV5:*J,Ua73|T,1(4+{*FrUrW@G7rsf*TDRdr+^", "type": "n" },
        { "src": "images/image29.jpg", "url": "https://noclip.website/#klonoa/s124;ShareData=AN2=U9y[y+UH;m89r&a^V?e]rRI?o3UXrInUN2[H+3jggUjDMuUM$Dv9iWxu+5", "type": "n" },
        { "src": "images/image28.jpg", "url": "https://noclip.website/#klonoa/s631;ShareData=ALolK94NmvTM+ym9HY]1+2*0c6DZhYUrt_oTcxxdVm|?MUNa7UTls[}95DS7Vt", "type": "b" },
        { "src": "images/image27.jpg", "url": "https://noclip.website/#klonoa/s120;ShareData=ANc85Umdcu8]9wr9gHBqV=qZ~5Ti7!Uqeb99bMm8+3(N|UO_uCT)_jCUsM:=Vt", "type": "n" },
        { "src": "images/image26.jpg", "url": "https://noclip.website/#klonoa/s818;ShareData=AFMjsUZv9uTu0zR9z5c=+ge[J5$ur1UphU~T?Y~GV0F}&Ur!G{82JN$UZjiB98", "type": "n"  },
        { "src": "images/image25.jpg", "url": "https://noclip.website/#klonoa/s732;ShareData=AT[C2UX:NtSf[O*Ti_l{Un4bl3vI[~UrYIx85$^^9~zIS8mZK?Tn;[1UoHjAVt", "type": "b"  },
        { "src": "images/image24.jpg", "url": "https://noclip.website/#klonoa/s731;ShareData=AIj6KUcC}uS$8OV8sH_YVGjT$O[r+AUcCI{T=~~V+SyS_TzBf&8&{?eUt7-0Vt", "type": "b"  },
        { "src": "images/image23.jpg", "url": "https://noclip.website/#klonoa/s730;ShareData=AFL6jUg?n8T_ptBT|Do!V,g5XPtRvLUW}wf9U9Gi+-;899NYL!UINA)Ui+GcV[", "type": "b"  },
        { "src": "images/image22.jpg", "url": "https://noclip.website/#klonoa/s631;ShareData=AVdZ$9jqIi86N&JT;x~TU/|xd5{)}-UVoxRUU@!yVWKN~9But6UI3nI9g|[3+5", "type": "n"  },
        { "src": "images/image21.jpg", "url": "https://noclip.website/#klonoa/s630;ShareData=AY]nTUoV&fSAz!)TK5mUVnSQiQ-jrdUW8248+M--+9MYI8JZNBTzc~AUr=j;V[", "type": "b"  },
        { "src": "images/image20.jpg", "url": "https://noclip.website/#dks/m12_00_00_01;ShareData=AYl1|UWF0w8xWb99PkBb+:3q76qAf4Uj5:h8$G^&+PMK1UJdx*T0qIXUa&l,+5", "type": "n"  },
        { "src": "images/image19.jpg", "url": "https://noclip.website/#kh2fm/ca04;ShareData=AIoeaUoJ1=Tjd=M9eG)x+]m[N5=9!?Uk8OST5ND8Vyj-cUIHEG8$?1gUuGrTV[", "type": "n"  },
        { "src": "images/image18.jpg", "url": "https://noclip.website/#smg/SnowCapsuleGalaxy;ShareData=ATs[093zhk7;/*jTpzulU^~iKQ5:;pUskuoT^R^eWF$)L82&]mUGU&W9k9Ss+^q", "type": "n"  },
        { "src": "images/image17.jpg", "url": "https://noclip.website/#klonoa/s510;ShareData=AY,uaUk&XaT|Ee~94:aV+}}2f6GfI,UZHs9UF17jVz|I9Unv*89P}qBUm6)aV[", "type": "n"  },
        { "src": "images/image16.jpg", "url": "https://noclip.website/#klonoa/s511;ShareData=AG4S+UZe@_9Y0PrUd(m~VY:L-QZq|*UXc6eT}u]^VgwrP9v}o{9StEBUda(_Vt", "type": "n"  },
        { "src": "images/image15.jpg", "url": "https://noclip.website/#klonoa/s512;ShareData=AFS3uUvZrYULY5C93naZ+(o1TQO}M0Uh)-9UI@PcVs28dUZ]s49O9cMUl&ZFVt", "type": "n"  },
        { "src": "images/image14.jpg", "url": "https://noclip.website/#kh/al00_05;ShareData=AE$lrUWw4Q9QP^MUnE@GV@bC&5}M3vUr:koUL6~bVt8mo90)WQ9ehCWUWHHHV[", "type": "n"  },
        { "src": "images/image13.jpg", "url": "https://noclip.website/#kh/al00_04;ShareData=AKSMp9tOty9cYTCUCnRj=0MnP5fWTdUvL[IULm:mWIOnh9R{jXT|uVo9m^CC+^", "type": "n"  },
        { "src": "images/image12.jpg", "url": "https://noclip.website/#kh/tz00_02;ShareData=ACbT8Utpd,83;:LUT1+2=&V-KQ)md1Uu4G7Tz&PiVyiuu9d]mo8-)beUdW==+5", "type": "n"  },
        { "src": "images/image11.jpg", "url": "https://noclip.website/#kh/tz00_02;ShareData=AUEjm91FiXT!Y0M9xk+x=I(pjQ]7*lUt~PrT{jjxVyfQ1Ub:2CT@dec9h8-s+^", "type": "n"  },
        { "src": "images/image10.jpg", "url": "https://noclip.website/#dq8/c05i01;ShareData=AY-hSUc$A_R]TfnTC/f99qg$Z6d-)RUWi?O8vRK3ViFF+8U?N~TlM-vUup2J+5", "type": "n"  },
        { "src": "images/image9.jpg", "url": "https://noclip.website/#dq8/m07i01;ShareData=AWr]{Ub[2uS+^k68Z$DM9T;:V3*0&3Usw-hUG?;wVAY7*TAdJM9gW;rUu@1eU!", "type": "n"  },
        { "src": "images/image8.jpg", "url": "https://noclip.website/#dq8/m04i04;ShareData=AS/{;92UMd8/hq3UT2~aVfP|W5=He4UXytvUELZ5VQA979cX^xUNy0g97Trw+d", "type": "n"  },
        { "src": "images/image7.jpg", "url": "https://noclip.website/#dq8/m08i04;ShareData=AP4qDS7v749Z$A8UW*kBU&7F_Q2a_NUaWZ+T}[~NVs/+S9n;vo7n[NMS_S1EVS", "type": "n"  },
        { "src": "images/image6.jpg", "url": "https://noclip.website/#oot3d/kokiri;ShareData=AQbySUmqxPSF@Rz8w3VW9~!tpP7eaxUrC4XTNpA(VgO51ThW8,8T*E[UY!7DVt", "type": "n"  },
        { "src": "images/image5.jpg", "url": "https://noclip.website/#oot3d/mahouya;ShareData=AYlhPUo9hM8+i^UT^aofUmflx5ocIqUjzL~T3bq}VdZfz9Q4(j8],1cUt!=ZVt", "type": "n"  },
        { "src": "images/image4.jpg", "url": "https://noclip.website/#oot3d/shop_drag;ShareData=AZJVqUul/i9L927UtY|^+ZIWs4zcWBUr|D+URu+fVV&GF9pP?g9S5dbUZ:2*Vt", "type": "n"  },
        { "src": "images/image3.jpg", "url": "https://noclip.website/#WorldOfWarcraft/Ironforge,%20Dun%20Morogh-775971;ShareData=AH*4/9ia{Z8;a[d9p@{KWzUSX6I4N0UuKqJ8}JZsV8/E;Uo]t~8[K4y9jLUCWq", "type": "n"  },
        { "src": "images/image2.jpg", "url": "https://noclip.website/#Halo/deathisland;ShareData=AIkGVUg+7F7q^-M8wmKOU&ydp6LQgGUcS?(86GZ+U)*p]TcyoqTf&u+UazMh+C", "type": "n"  },
        { "src": "images/image1.jpg", "url": "https://noclip.website/#dks/m15_01_00_00;ShareData=AK0L~9Z,Wa9V?{TUY*f-+:U}YQkCpEUddHKT)-H?V4|N:9uv:[T33Hc9SOuHVt", "type": "n"  }
    ]

    const s_gallery = document.getElementById('SceneWrapper');
    const b_gallery = document.getElementById('BackgroundWrapper');

    imageLinks.forEach(image => {
        const container = document.createElement('div');
        container.classList.add('image-container');

        const link = document.createElement('a');
        link.href = image.url;
        link.target = '_blank';

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = 'Image';

        link.appendChild(img);
        container.appendChild(link);
        if (image.type == "b") {
            b_gallery.appendChild(container);
        }
        else {
            s_gallery.appendChild(container);
        }
    });
});
