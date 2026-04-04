import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function TruyenThongPage() {
  return (
    <main className="min-h-screen bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
      <Navigation />

      <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-12">
          <div className="flex items-center gap-2 font-label text-xs uppercase tracking-widest text-on-surface-variant">
            <Link href="/marketing/nguoi-gieu-mam-xanh" className="hover:text-primary transition-colors">Người Gieo Mầm Xanh</Link>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="text-primary">Truyền Thông</span>
          </div>
        </div>


        {/* Social Feed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-x-12 md:gap-y-24 mt-16">
          {/* Card 1 */}
          <article className="group">
            <div className="overflow-hidden bg-surface-container-low p-2 rounded-sm mb-6 transition-all duration-300 group-hover:bg-surface-container-high">
              <img className="w-full aspect-[4/5] object-cover rounded-sm transition-all duration-700" alt="Official Poster MV Người Gieo Mầm Xanh" src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/524164094_122101821002954710_1604864390286472366_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGpdMgrQbp9_5HuGaoioU3ZsdLgve-5Kryx0uC977kqvAnJODLfAbZOBk2LiSHNE4Xr7NNoBZ6riQmY_uhjoce7&_nc_ohc=Ns7jkQrgpisQ7kNvwHC-AQY&_nc_oc=AdqIEzbXsOv13eaF5qbNFX1k1yeKF4TPepgG7HAJdmCymVeV8SHG06dK5fRWk1mQbrQ&_nc_zt=23&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=D41e6q6j1CostpqcsaweHQ&_nc_ss=7a3a8&oh=00_Af08lHtTjDAfyXRl9DLlb8BkYfTtS44K8GUHfqMJUV7ZWQ&oe=69D666A0" />
            </div>
            <div className="flex justify-between items-start mb-4">
              <div className="font-label text-[10px] tracking-[0.2em] uppercase text-primary font-semibold">Official Poster • 01</div>

            </div>
            <h3 className="font-headline text-xl text-on-surface mb-3 leading-snug">OFFICIAL POSTER | MV &quot;NGƯỜI GIEO MẦM XANH&quot;</h3>
            <p className="text-on-surface-variant font-light text-sm leading-relaxed mb-6">
              Thương trò, chẳng thể bỏ nghề gieo ươm<br />
              Trèo non cõng chữ âm thầm,<br />
              Bám trường cắm bản. Mùa xuân đang về.<br />
              <br />
              &quot;Người Gieo Mầm Xanh&quot; là một thước phim nhỏ, kể về hành trình rất lớn – nơi một cô giáo miền núi âm thầm thắp lên ước mơ cho những đứa trẻ vùng cao. Đây là một MV phóng sự đầy chân thành, cũng là lời tri ân sâu sắc gửi đến những người thầy, người cô đang ngày đêm gieo mầm tri thức.<br />
              <br />
              Chúng mình mong được cùng bạn chứng kiến và lắng nghe câu chuyện này – không chỉ bằng tai, mà bằng cả trái tim.
            </p>
          </article>
          
          {/* Card 2 (Asymmetrical offset) */}
          <article className="group md:mt-24">
            <div className="grid grid-cols-2 gap-1 overflow-hidden bg-surface-container-low p-2 rounded-sm mb-6 transition-all duration-300 group-hover:bg-surface-container-high">
              {[
                "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/525563682_122104163654954710_3496188807196180754_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHs9UeiLEYTLMUgFmW8sq-l4uR7QPP08Pfi5HtA8_Tw9-QX3JK5N81kvoVPZmtzSkBdjMPCH4Zw5N1hfmxiGJ9m&_nc_ohc=kUZ4pyKVJecQ7kNvwGHssIA&_nc_oc=Ado5ojIoEhr971xhDy7XOGyHzpdmkQwzEPWvuDL461pDNQD22MJ0cUju6oMd1dekohE&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=0bvDRkldpDXxUt6FEavrOA&_nc_ss=7a3a8&oh=00_Af2JL581Z3-ayiDPOOYe23qWzhP_011yqfwsfWL-XDpWKA&oe=69D66017",
                "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/524924082_122104163648954710_7722534500666204434_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHVd2lZJIJN-SHB9CL4HY2jhFiIG8tfy-mEWIgby1_L6dV_Q9_SVnYtrJ8f375fmLHVwEudQPj4Rv3MGqpPpO6e&_nc_ohc=O52QNKplvgYQ7kNvwGHHZF_&_nc_oc=AdqWRw8qgqaPSsL1-HBRfQgogrlyUMbeEPuwq0595NW1KSWeabZG-uh63BqSUDe1gRU&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=eWJXmVH3ZXglI7XTdt2Zvg&_nc_ss=7a3a8&oh=00_Af38P6HxGEkRvyJkgulAqVFWJ_WwvbmrRiAL7jTZ--3i-g&oe=69D67ACD",
                "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/525014687_122104163732954710_2678793289120740561_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHNtnAYn2g6TgFRRp52y2fElSXDGwBJV6qVJcMbAElXqtWM8VMei8I_FTwUDnhwmvqNUE_yjTdwsZJDMZKC5Nry&_nc_ohc=j_SnJrIIWZUQ7kNvwEH9eAl&_nc_oc=Ado_SqaQKaHAPR1CQfnEMYLM8X0uXWge7PF7gHeWeI0Im0PegJ0Rxm4cOKFSybMzloA&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=TURAVAabeGAWVkcbGZSZdw&_nc_ss=7a3a8&oh=00_Af0gDZtMLfp9JCft6UfpMUa8qBUWvMre4TeekelZMdgXrQ&oe=69D66EF4",
                "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/524989740_122104163714954710_3434737012844942839_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGrAaveznKzcRv-W6w-750WuSfQiuxeLr-5J9CK7F4uv0z2hE7e7WsYwD0H_ssLmnq3vg0sGC1Vf_VcxqrFtXhx&_nc_ohc=xUv8L5zoLCkQ7kNvwF2h1oG&_nc_oc=Adq6HzyM5RUbI51LS3apEJOZ2q4bE4Vcd6rXITJsU7E0XISrhEh4p8Xu34OtiJvCDZw&_nc_zt=23&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=0cIYhqEd7AAwJwRV1i3fQA&_nc_ss=7a3a8&oh=00_Af1XqvQQAVkZrL-lmDTyZxnjU0Pj42AuAu5woyKsYWycCw&oe=69D67786"
              ].map((src, i) => (
                <img key={i} className="w-full aspect-square object-cover rounded-sm transition-all duration-700" alt={`Hành trình gieo mầm ${i + 1}`} src={src} />
              ))}
            </div>
            <div className="flex justify-between items-start mb-4">
              <div className="font-label text-[10px] tracking-[0.2em] uppercase text-primary font-semibold">Câu chuyện gieo mầm • 02</div>

            </div>
            <h3 className="font-headline text-xl text-on-surface mb-3 leading-snug">HÀNH TRÌNH GIEO MẦM TẠI TRÀ VÂN</h3>
            <p className="text-on-surface-variant font-light text-sm leading-relaxed mb-6">Giữa non cao Trà Vân, cô Phú lặng lẽ ươm những &quot;mầm xanh&quot; tri thức. Mỗi nụ cười hồn nhiên của các em, mỗi lời tự hào của người cha già, đều là minh chứng cho giá trị vô kể của những hạt chữ cô gieo. Bởi đó không chỉ là con chữ, mà là cả một tương lai đang chờ phía trước.</p>
          </article>
          
          {/* Card 3 */}
          <article className="group">
            <div className="overflow-hidden bg-surface-container-low p-2 rounded-sm mb-6 transition-all duration-300 group-hover:bg-surface-container-high">
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F61578641312178%2Fvideos%2F2002084023531463%2F&show_text=false&width=560&t=0"
                className="w-full aspect-video rounded-sm"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div className="flex justify-between items-start mb-4">
              <div className="font-label text-[10px] tracking-[0.2em] uppercase text-primary font-semibold">Video Trailer • 03</div>

            </div>
            <h3 className="font-headline text-xl text-on-surface mb-3 leading-snug">TRAILER CHÍNH THỨC ĐÃ LÊN SÓNG | MV &quot;NGƯỜI GIEO MẦM XANH&quot;</h3>
            <p className="text-on-surface-variant font-light text-sm leading-relaxed mb-6">
              Giữa đại ngàn, có người lặng thầm mang chữ đến từng đứa trẻ.<br />
              Một hành trình không ồn ào, nhưng chạm đến tận sâu trái tim.<br />
              <br />
              Trailer chính thức của “Người Gieo Mầm Xanh” – hé lộ những thước phim đầu tiên về câu chuyện của cô giáo nơi vùng cao, người vẫn ngày ngày gieo mầm hy vọng giữa núi rừng Trà My.<br />
              <br />
              🌱 Chạm vào trái tim, lắng nghe bằng cả tâm hồn.<br />
              🎞 Cùng đón xem trailer và sẵn sàng cho buổi công chiếu MV vào ngày 01.08.2025!
            </p>
          </article>

          {/* Card 4 */}
          <article className="group lg:-mt-12">
            <div className="grid grid-cols-2 gap-1 overflow-hidden bg-surface-container-low p-2 rounded-sm mb-6 transition-all duration-300 group-hover:bg-surface-container-high">
              {[
                "https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/529330650_122111419478954710_8427348681495922526_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGxr6xEesPlTj09bwri6u9tfuUo2wgFIBV-5SjbCAUgFfzoaN2zExSLE93MFhLnUuCeGAvNSc8k9gJDv4zgEuYr&_nc_ohc=Y4-x9NNdk2YQ7kNvwEBgy6O&_nc_oc=Adqtez9s_EdlNlM88TOxwI8D6JQrt2TwiMHF3sfKz_G3OWI6aq1wSoZBmxOj4HO1TzQ&_nc_zt=23&_nc_ht=scontent.fsgn2-11.fna&_nc_gid=vX_UlfYKo4C9-aDjebkvRA&_nc_ss=7a3a8&oh=00_Af2-d2eW-nM0lWouksmdXzSsdy76ouBalwCbg6yVCJhWgw&oe=69D680E1",
                "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/529627219_122111419526954710_6338714660457820187_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHnw4H7yD1NZ9b5jQUQPUIgQO7SAML1_NNA7tIAwvX80zHQVlsu-Vx395OtGR0Y4F79me-sIkr1i4M9S2kr03WE&_nc_ohc=PBCb96sVHDUQ7kNvwFcJXo8&_nc_oc=Adr7UAgcQNkE9CXWESRWf6yl201zgnxbiE1jlkYHihcQXRTWau1N15ksRWW3vW5RKQA&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=7RGRP_54jOh59gBm2yOcBQ&_nc_ss=7a3a8&oh=00_Af0rTk4Rdu6wB5k1bpUBf_tDD6nJ4T-5UWTKTbJV7vT89A&oe=69D667FD",
                "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/530189332_122111419586954710_6541424583317634448_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFg-Z7xqUmD9mzxemVuk3C3yxkdhWvDYYzLGR2Fa8NhjFbefLAPmZEJF1phAhxi5GpQ-wfJtjQjgzonhpxcf-KA&_nc_ohc=CyaVGLSkmesQ7kNvwG5fk01&_nc_oc=AdpZ9CdZosR5j3RdlUIAp2EjhnrO-Wsrt6WwWWBHh5o3ING-SdjcnTW3u_J4G7KrIm4&_nc_zt=23&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=Uhi3PuYQK4XW5x8Bp3aTYQ&_nc_ss=7a3a8&oh=00_Af0JJE7CTYm_XnWvp0dN2OZ0KuKcd2OzzLB_JwsaHWA1UQ&oe=69D685C3",
                "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/529659264_122111419916954710_6698174272058610603_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFH5bLEEpAxFoUTMdQmOnWBXuxawH0F92Ze7FrAfQX3Zj2SupsU_W70nr_eNSuQz5vxPKYpb8FOlN7adEXlavVh&_nc_ohc=ggg0kAMGVkQQ7kNvwFxU3B-&_nc_oc=AdqmlqJn7iaF0f77iCSkh9KoAYqOvFsGOZ5kBFdEwDBI1RR-CSvV3tkAhjhIYFZ7_IA&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=JsHM4-gAhb8mWVm1dsGlBQ&_nc_ss=7a3a8&oh=00_Af2EqW7MRs5t-S7tzODiHrpKvBV9YlzBLZCLGproahFgLw&oe=69D67879",
                "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/529967247_122111420000954710_5522840186421778742_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEebPwO0xF7aRxFRAaUzbq71s-qiHvrAmzWz6qIe-sCbEwWtkIGvSdkX9eolGAiTuBIM6EOqaImm_y4ZZIGz67-&_nc_ohc=gHc4xCwbiGMQ7kNvwE2_PX3&_nc_oc=Ado5v-OEGxIYmzPjy4FBeT2EwnZ5fBrcyhB3MU_riegZdCpK0HoLMBbLgPQTNOJ8tz0&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=cw3rjKzKX_b2kvQjy-CLkw&_nc_ss=7a3a8&oh=00_Af2U7gbjmncY8L7is6fYzDczwFjotl0PY_O6IM8wOIGCCQ&oe=69D65641",
                "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/529430911_122111420054954710_3394607399413379716_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEHbvgysm8WmCnWdYta18YQS6xuP8dZ_-dLrG4_x1n_5zYNncYQad-jcFM-6Zhmxh6vlhC6lL_kWGVqqvR-BiHZ&_nc_ohc=cvlGQ2aMM50Q7kNvwH-Hms-&_nc_oc=AdqnaY_E6gv0DuoAQ3uD3UEfpuLN-GjuhgZBSXs0RyArpjNVInllfgRR7iUhyhYhfOo&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=w1em4wtnsj2KgtZv6TUg7A&_nc_ss=7a3a8&oh=00_Af3crkiITLtkVObqmJzQDfO6-K7LYSb2t6N6JH_TZN4xRg&oe=69D684E3",
                "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/530460504_122111420168954710_3989672821991999151_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGhGYPCbTnzWKfRSIIlE1egikOEkFKYMw-KQ4SQUpgzD3f_m4gPQ8JnOGgg4xBmZKcQL-5HLU1F-n9mPaCTTprn&_nc_ohc=k0nyMBhxyYcQ7kNvwFfmEr_&_nc_oc=AdqkAVefaMPt33DdfyMzMaozzHKFNTbFyTJykUF13jnq93g5VTyhvDhuvmsnD3Pd6eo&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=rNV0jkxh_2k5trOuhxa64A&_nc_ss=7a3a8&oh=00_Af35sbsHRYcGTneJCZWcFwy9-tBjLEeDElvmiR1kmzJ-pQ&oe=69D688C1",
              ].map((src, i) => (
                <img key={i} className={`w-full object-cover rounded-sm transition-all duration-700 ${i === 6 ? 'col-span-2 aspect-[2/1]' : 'aspect-square'}`} alt={`Lời cảm ơn ${i + 1}`} src={src} />
              ))}
            </div>
            <div className="flex justify-between items-start mb-4">
              <div className="font-label text-[10px] tracking-[0.2em] uppercase text-primary font-semibold">Hậu trường nhỏ • 04</div>
            </div>
            <h3 className="font-headline text-xl text-on-surface mb-3 leading-snug">💚 Lời Cảm Ơn Những Trái Tim Đứng Sau “Người Gieo Mầm Xanh” 🌱</h3>
            <p className="text-on-surface-variant font-light text-sm leading-relaxed mb-6">
              Sẽ không có “Người Gieo Mầm Xanh” trọn vẹn nếu thiếu những trái tim kiên định ở phía sau. Họ chính là điểm tựa, là bệ phóng, là nguồn động lực để mỗi thước phim mang trọn hơi ấm yêu thương.<br />
              <br />
              Xin gửi lời cảm ơn chân thành nhất đến tất cả những người đã chọn ở lại, đồng hành và trao gửi niềm tin. Sự hỗ trợ ấy không chỉ giúp hành trình của chúng mình suôn sẻ hơn, mà còn thắp thêm ngọn lửa tinh thần để cả ê-kíp vững vàng bước tiếp.<br />
              <br />
              Chúng mình mong rằng, khi “Người Gieo Mầm Xanh” đến với khán giả, MV sẽ không chỉ kể một câu chuyện, mà còn lan tỏa lòng biết ơn âm thầm nhưng bền bỉ mà Mây Production luôn trân trọng.
            </p>
          </article>
          
          {/* Card 5 */}
          <article className="group md:mt-12">
            <div className="grid grid-cols-2 gap-1 overflow-hidden bg-surface-container-low p-2 rounded-sm mb-6 transition-all duration-300 group-hover:bg-surface-container-high">
              {[
                "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/531747758_122111824874954710_4696941246115066139_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHLUmb-NLhRX7MC_Yv6WAq16qHiFBpk1CXqoeIUGmTUJdrBC3J5E7Yoi4AoCowhKVdzVWLbtYgRbgJJgmjGrHYD&_nc_ohc=Y4ErhMIgmVgQ7kNvwHl9k4U&_nc_oc=Adr_NcV2r9hnth_EEr8XvJyYVHpj_607oy9GzTcBTtryHMZsvXRPEMhV4LLbOufYd-o&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=vzCQSHVgN7azan194dnSDg&_nc_ss=7a3a8&oh=00_Af2Pet__JanFoRMdDomlqL7hd2inhtQLsXPHsaIK8JeLVA&oe=69D67ECE",
                "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/529272077_122111824958954710_740993323001358157_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGdc3rH5oXb0i2lIh4yRlCsAze__V1LfgQDN7_9XUt-BIVxEd3VTv-fLJTTUdMOepQlQDLECOrptvIMAex1u6e0&_nc_ohc=sLXbpvh9dUgQ7kNvwFwnXrj&_nc_oc=Adorq7sfiBvdxDjbB-LcUKdQxMYG5Vzp6vf2n0ETPdPgzIoLf_WFl2aPP-SjjR3Wm4E&_nc_zt=23&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=b-31JnAGXZUgPgg1clja8Q&_nc_ss=7a3a8&oh=00_Af0EfOlyQmekDb6GQkjsedvsjX9hUgQAG8Y_brE0T0oPPA&oe=69D67137",
                "https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-6/530247035_122111824856954710_7987571091783792756_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeE-ocD6D0GXbn2kswA9NklUc-retr8Y35Jz6t62vxjfklXydzq8-BiyQ6i2D9qla6Ftp3kqJj1CYLwOw1mltmuo&_nc_ohc=qSPnbSlCL40Q7kNvwGqMZ20&_nc_oc=AdoFDVviTuRGQMHQub1kP98kMfhX1zNMN56gY1-hoOCkQhfoJA5sLq50z-VqkMWF6-Y&_nc_zt=23&_nc_ht=scontent.fsgn2-10.fna&_nc_gid=XgJdsULnuh9bwmRYlVNWDw&_nc_ss=7a3a8&oh=00_Af2vXgoCHTLSU3SIN4IJbVkvXuTe6YYM-BK6MY0620zL0g&oe=69D6868E",
                "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/530244003_122111824976954710_3223297382223334727_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeG1Ks1aoyIks_ScOjZGiauzOEG0KROeIp04QbQpE54inYUCMEnxabQYVlAuh9XGsfZHPnK5R1cuMpgFQ_ve_bfd&_nc_ohc=k5xvu3m7OCoQ7kNvwEdO6g8&_nc_oc=AdqgJqQLEbOPRjKPN6OjiFeE6CFo3WlsT0jo-hvulJaTqp7dQHuiW4pDFDAqOXajowg&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=RfA-1nUxrB98PUGpBxPDTw&_nc_ss=7a3a8&oh=00_Af0o2nMKou1avkhXwARFKZjjNlJOAn4677TC-GlmVjSXnw&oe=69D66746"
              ].map((src, i) => (
                <img key={i} className="w-full aspect-square object-cover rounded-sm transition-all duration-700" alt={`Behind The Scene ${i + 1}`} src={src} />
              ))}
            </div>
            <div className="flex justify-between items-start mb-4">
              <div className="font-label text-[10px] tracking-[0.2em] uppercase text-primary font-semibold">Behind The Scene • 05</div>
            </div>
            <h3 className="font-headline text-xl text-on-surface mb-3 leading-snug">𝐁𝐄𝐇𝐈𝐍𝐃 𝐓𝐇𝐄 𝐒𝐂𝐄𝐍𝐄 || Những Người Giữ Lửa Cho Hành Trình 🌱✨</h3>
          </article>
          
          <article className="group lg:-mt-24">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-2 pb-3 mb-6 scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {[
                "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/539495625_122117641160954710_6060366826786293789_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFk02_I9JotFmNDQpAU6SbAcJlf-lIhq9JwmV_6UiGr0g4_aBIpfyMYDM6wW0WqKGfNbypXQeFd_86xWop_2viM&_nc_ohc=q70Hq-UqNCgQ7kNvwEUrqCK&_nc_oc=AdprUuD0WXt7FsUDAruciOExvvGDiKoPQQn0l9kqZWfVzQMQFM5SvQYCd7OWyp3tPFY&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=Th5OE5rKeF0Hx6pBhKFoWw&_nc_ss=7a3a8&oh=00_Af0PHeBNZeBBbAl6aUQK1E6wyiGGB4QNcWh_FSjZN_G0UA&oe=69D68688",
                "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/539157836_122117641574954710_3698267708610389854_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFTw0vCyM8FIf3P9zZ1MO4ZBCxMWyMabm0ELExbIxpubXlz_U-7TzAnZNsreJBVtqlZUkBLl3-2BClvoqoDIQBC&_nc_ohc=CmjCsSTdCaMQ7kNvwH3Vgm-&_nc_oc=Adrt21tw8GezOfI_JE6SQZ7ocoPNpsCy4li7PLhGTO3s7o4yOfyd200RxJba3prczAY&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=9uLZINL7dUZvrfGayMRktA&_nc_ss=7a3a8&oh=00_Af0YGMjMTaIjC56natKQHXBP8p9Chub3ISGymSMZm0TxkQ&oe=69D670EA",
                "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/539866675_122117641190954710_8460296771299999134_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeG-bpL-FN2DZ0BEaKApCRSw0lxpB2L6JmDSXGkHYvomYLLLrXF7mVIyR9I_2g3J_6brnoKQb8s4F9Lh9Y8D_4J1&_nc_ohc=c7_tQTj0ZzkQ7kNvwH3ugo_&_nc_oc=AdqYH_y69ntp-b50LvF1oop85Hai5OgZnlILOb43l0j84cESqv4dpCk21SHBctGQ8y8&_nc_zt=23&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=5E8g1xM-HN9QXKO1b5pRJQ&_nc_ss=7a3a8&oh=00_Af2VJ2JD5TEKWuGPOAiC7LYTSopk2l9vKIYARbm-dubVcg&oe=69D6578C",
                "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/539239519_122117641238954710_5861815370236865355_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFsIBi2oPVCvrfwI7VITwxBy-Q0BOX8okfL5DQE5fyiR_-rOgE3sMhfnaw9AhlUsVrE-H3qdTpd23ZGIVMQShXA&_nc_ohc=irGIoTrnoecQ7kNvwGPnjcq&_nc_oc=AdrQp6zUcdlWHqm4kuUyBrIpxCd5qk3my4aTHsGo_lrJatqyHZeki3x4NnKgQlwraYQ&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=S7L1c2Kj-w-VmtQQuTF4VQ&_nc_ss=7a3a8&oh=00_Af2I8KwEim-HIMkMkqI-skwG7XOR7nlp7dXTozVI5_Q5SQ&oe=69D66B8C",
                "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/539202150_122117641334954710_1714087832064947315_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFDTAW1-NCT8UcameWuc5_BMt3MogzrKuMy3cyiDOsq484f3f0799TOz3TEdFe_TDPryq1WIidF6ZJcVx6fU3U9&_nc_ohc=ik6ErJfODOAQ7kNvwG8yogL&_nc_oc=AdqPD2VH4cpGVJFYeC_J3ph_Z8qnN7PodHEyJ8uPs72TJLy16vMZsZb69tKWWGPKoLM&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=OlLvnkvTKKUKU0K3FnCOhA&_nc_ss=7a3a8&oh=00_Af2PmpRf5g7eAzIxIOSb5E4yG2eeEjLkuVpWPfOxqqKx1A&oe=69D67A32",
                "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/538956585_122117641370954710_4029362106943633354_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHEtzchL_fEt4ggdvkdXPlyzm5Y0Z0G-gvObljRnQb6C27x2xn39eE9uow6HwSTE3W65sQbViXjKXbXY5uJ0csg&_nc_ohc=ve_coKsWEsQQ7kNvwF2OZ-M&_nc_oc=AdqY6rH4j6lIDSgzexDKfBtKB1JsxzwvCqCGCHP4XwFkb71DeghuIzAmonuzqfG4dkg&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=IgwsqNX8Os1pCPoDAcPukw&_nc_ss=7a3a8&oh=00_Af35Lj9jCAbCSm6AwVh6RBN0Qe7Rw8RvODWcXm9gLgJ1Bw&oe=69D66100",
                "https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/539620319_122117641610954710_6207196044050460743_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeG_yBprLjVzejGXtONn9hcMdWkilMUnU4d1aSKUxSdTh_SKYJK95zVS5HEgGhnmci11x4mfAACisxhNvWBceV28&_nc_ohc=FbiPV_zSsOgQ7kNvwG9j-r_&_nc_oc=Adr2KUC3JE7NaBJG9fo0XRTCjk4YrMnNzH-RNs4Kofd-tG8IcS46vQejHPzwrr9Oe_c&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=zeWoKOpvQobFHeLrZJB4zQ&_nc_ss=7a3a8&oh=00_Af2S5jPJQ95niTkKJeKKs4KYcSIJ6ripR3JWOJjIaxE0XQ&oe=69D68E7C",
                "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/537689122_122117641520954710_3156028411954832997_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGDekwW3KRaiWgAMD46ki_VHIe4UB-ZI9Ych7hQH5kj1jcMPFBuUw0NhtsaJS4vQhEQ38kdTgQnT8Lka1K9XChv&_nc_ohc=pndc5o-g3VQQ7kNvwHzOuCo&_nc_oc=AdqrRMsps-aPO9Y7AdzRWgNfVhq8tJuu654yZsYDvz0038YBJuf1nK3bAjHmWoQAAUA&_nc_zt=23&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=3RJJA8TTpyzJwX2WY2IQbw&_nc_ss=7a3a8&oh=00_Af2hKhCkc2mKw9BNEgD1BauB1kIlIkiLISPUlLDy95ylYA&oe=69D68F45",
                "https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/539002261_122117641448954710_4716102532531663902_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFfhUZHgtPNDSVbLEfZct3SLtIy77PZ32gu0jLvs9nfaA8wgOlkutEDOsWDPTQcop_xBT6n_fLEXI3tVfIP7pJj&_nc_ohc=jn7VC6JBlDsQ7kNvwGqDjOJ&_nc_oc=Adqd-tfFmNHjHGx1zBRIkh0KEldcHpqudSHudEO55088NTxjx6gqTj3--zr1_Czd7MM&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=5ureRokje7dCcDavbR-SXA&_nc_ss=7a3a8&oh=00_Af1ZMHvMvB5utBjDFe2jItF7k8ap4II_4I-Mu95Chh04jQ&oe=69D6625C",
                "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/537757364_122117641478954710_6950387843232004258_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeH1W91kkqMp8kHuy27RZDxNBANiiSbsYgkEA2KJJuxiCemArHFWJd5iNBCevV6a8IWk0VDumPgGMddkxw2pVy0x&_nc_ohc=LenB_iQY4NAQ7kNvwE9VqdA&_nc_oc=AdokK5W4hGbszI6w_KXc736378eoj8TpbEtgB30EoZwcixbIPZb2s7p0ip1_Y9sA9Gc&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=yz32s6RlZZAW7eyuWrNVnQ&_nc_ss=7a3a8&oh=00_Af0vGJTARoL_vLyPu7l2Uf97IqiQ_JCQNTlhAMpqPlJ2lQ&oe=69D6640C",
                "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/539223099_122117641562954710_8149268165044978459_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFAX7MqhMUCE8ZPg5931WVCESFe3RNueIwRIV7dE254jH9PfHavnPhIAIRdUW6OkFC5xcvu0MZNoObcc-jutE__&_nc_ohc=CpJ5w2IytBIQ7kNvwGWrTxT&_nc_oc=AdqNcRZm-yhwYASQPu001Ud2en06UDI3niG0X74gTa2hRPo1e411z2XgGGx1NDqkA2g&_nc_zt=23&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=wuw9viPqR2EG8ML6dkDFgw&_nc_ss=7a3a8&oh=00_Af0kxgYHeZvu-GuTowNuSgXKCAc_tcWU77hRHQtmxrPkGQ&oe=69D66715",
                "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/539535883_122117641646954710_8102251558688573587_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFmyTc3fVegFxZE2Nuor3BppJVh97faZl6klWH3t9pmXrDv-pwFczSmZorEWyUjriK-Kk5iFaPJ5O9k9cin82xj&_nc_ohc=-v0j4XdkwLMQ7kNvwGK_9sE&_nc_oc=AdrlTMAlyxlIAXMaZADlO4Dn-Go283iMz6kMp_otu8I2j5O4UxouGYehl16Z1aQlarA&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=DrVx3_smesu8W0nyuidAdw&_nc_ss=7a3a8&oh=00_Af2YedmVRnulkXf3kWDtTRyCnPEcFTEBk3vX7bo_NshDxw&oe=69D67B35",
                "https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/539440416_122117641694954710_190539602889224667_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEcWhU2n-BjK0rMiuQPSgOosVY-gMyst3SxVj6AzKy3dOrCSQ4aSQwl468HJ9ui5-jdirjpzQTLAdMX8aGdAftm&_nc_ohc=UUUPc_9IAgIQ7kNvwFb8ukX&_nc_oc=Adp-fZWOxy91mHFv6rk2LGnZR4xAk824PGXApHX3dUMrp01uH3HLxDxeOJg4IeezrLc&_nc_zt=23&_nc_ht=scontent.fsgn2-11.fna&_nc_gid=z1zlN9yTKWv7cxfoJm6hSA&_nc_ss=7a3a8&oh=00_Af0PyeBCKxn34a4mFu28Xv_BD5prZiKbKjVWMd5LY74MwQ&oe=69D6694D",
                "https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-6/539362712_122117641400954710_4434704204987520451_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEi_mewcPy8apuPob-RWLzP_TQW3RvaKSL9NBbdG9opIkpvwP2bHz-77ELq-WETMY5ExHKiyPUPlujoKXC5Ygu6&_nc_ohc=632zTFK4MKwQ7kNvwEsnaco&_nc_oc=AdprYbrU_H1sA7DooktyWPA3B4EkEb9sd13b3DYhuBPBpOmptRFRgwiBy_1UyU-ymw4&_nc_zt=23&_nc_ht=scontent.fsgn2-10.fna&_nc_gid=moHxKV308CF9RZW-96uhwQ&_nc_ss=7a3a8&oh=00_Af0st_41Stgy_jh8PfeH2CbnQd6EPitSnnoEwUOOShBf_w&oe=69D66E73",
                "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/538701270_122117641706954710_1562152064423473461_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEUuM8lZb0JkEUN4fwarOZiBzqgiyrxRn4HOqCLKvFGfr7dwgfqMNQc-nrowS13oI_lfR9xLKtYUmAfwFIoU6BS&_nc_ohc=weGyb7uZ_WsQ7kNvwGkPjTB&_nc_oc=Adr_m5nSxwl3KCGkLfM87NiaBMUmdSnPEPEIbib3qmg-PB2aF8keJReUqZvq8eOBgH8&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=m6yx_2dX4t0b1RwoCgEQjA&_nc_ss=7a3a8&oh=00_Af0DugORj-WP9yn9n5p2NA1UFxm90tSbSi7zvgzKt1oiQA&oe=69D665E0",
                "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/539449469_122117641568954710_6977956813785180226_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHleSvA5ZZHI261kAyYpQ2ieZko9J8pH0h5mSj0nykfSCoQS-vdnTlR2tPLbuIz0OpNxoheUDiR882GTNmeYNg6&_nc_ohc=NEqefY2mjOEQ7kNvwGX52JH&_nc_oc=AdoIZrg8VBQNoCG_K-bm0IuwkGE7O407WpuNVt3pOleTW0C8andXtp6hAXRJoT2qFds&_nc_zt=23&_nc_ht=scontent.fsgn2-4.fna&_nc_gid=F-w4Jo-JXcm07jweBecMnQ&_nc_ss=7a3a8&oh=00_Af0ExSiJyX2CqwC-hyDYd5PwlFBLUKSvFQOCBxlPoHd1Jg&oe=69D658A3",
                "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/539126810_122117641496954710_1761839294531889483_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHKACKia6XsvivvfS5AQo8-RzD9ONFFTJxHMP040UVMnCCZda-H0naTudzEPchMMZw14hKJOpgGaMn5T9WWyNjw&_nc_ohc=f-_vx7hwRJIQ7kNvwF_bTF3&_nc_oc=AdonlH5l6Q1QO19EOHCzlVbfwgvqZRU8LJqEL73DH-r9gZztfOqv--tOyU-0B0DAE3k&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=y4QpJPwwbqIiqKMBivrXTA&_nc_ss=7a3a8&oh=00_Af3d5IARQkQgJsaUrvmChmEfiMVsPiUpbQMZhmBiDo2CEA&oe=69D66634"
              ].map((src, i) => (
                <img key={i} className="w-[85%] md:w-[70%] lg:w-[60%] shrink-0 snap-center aspect-square object-cover rounded-sm bg-surface-container-low transition-all duration-700" alt={`Mảnh ghép ${i + 1}`} src={src} />
              ))}
            </div>
            <div className="flex justify-between items-start mb-4">
              <div className="font-label text-[10px] tracking-[0.2em] uppercase text-primary font-semibold">Album • 06</div>
            </div>
            <h3 className="font-headline text-xl text-on-surface mb-3 leading-snug">🧩 Mỗi mảnh ghép – một cống hiến thầm lặng 🌱</h3>
          </article>
        </div>


      </div>

      <Footer />
    </main>
  )
}
