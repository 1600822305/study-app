import type { VoiceOption } from './types';

// ============================================================
// 火山引擎音色列表 (完整版 - 基于 AetherLink 同款 + 官方文档)
// https://www.volcengine.com/docs/6561/97465
// ============================================================

export const VOLCANO_VOICES: VoiceOption[] = [
  // ========== 通用场景 ==========
  { label: '灿灿2.0', value: 'BV700_V2_streaming', category: '通用' },
  { label: '灿灿', value: 'BV700_streaming', category: '通用' },
  { label: '炀炀', value: 'BV705_streaming', category: '通用' },
  { label: '擎苍2.0', value: 'BV701_V2_streaming', category: '通用' },
  { label: '擎苍', value: 'BV701_streaming', category: '通用' },
  { label: '通用女声2.0', value: 'BV001_V2_streaming', category: '通用' },
  { label: '通用女声', value: 'BV001_streaming', category: '通用' },
  { label: '通用男声', value: 'BV002_streaming', category: '通用' },
  { label: '超自然音色-梓梓2.0', value: 'BV406_V2_streaming', category: '通用' },
  { label: '超自然音色-梓梓', value: 'BV406_streaming', category: '通用' },
  { label: '超自然音色-燃燃2.0', value: 'BV407_V2_streaming', category: '通用' },
  { label: '超自然音色-燃燃', value: 'BV407_streaming', category: '通用' },

  // ========== 教育场景 ==========
  { label: '知性姐姐-双语', value: 'BV034_streaming', category: '教育' },
  { label: '温柔小哥', value: 'BV033_streaming', category: '教育' },

  // ========== 智能助手 ==========
  { label: '甜美小源', value: 'BV405_streaming', category: '助手' },
  { label: '亲切女声', value: 'BV007_streaming', category: '助手' },
  { label: '知性女声', value: 'BV009_streaming', category: '助手' },
  { label: '诚诚', value: 'BV419_streaming', category: '助手' },
  { label: '童童', value: 'BV415_streaming', category: '助手' },
  { label: '亲切男声', value: 'BV008_streaming', category: '助手' },

  // ========== 有声阅读 ==========
  { label: '阳光青年', value: 'BV123_streaming', category: '有声阅读' },
  { label: '反卷青年', value: 'BV120_streaming', category: '有声阅读' },
  { label: '通用赘婿', value: 'BV119_streaming', category: '有声阅读' },
  { label: '古风少御', value: 'BV115_streaming', category: '有声阅读' },
  { label: '霸气青叔', value: 'BV107_streaming', category: '有声阅读' },
  { label: '质朴青年', value: 'BV100_streaming', category: '有声阅读' },
  { label: '温柔淑女', value: 'BV104_streaming', category: '有声阅读' },
  { label: '开朗青年', value: 'BV004_streaming', category: '有声阅读' },
  { label: '甜宠少御', value: 'BV113_streaming', category: '有声阅读' },
  { label: '儒雅青年', value: 'BV102_streaming', category: '有声阅读' },

  // ========== 视频配音 ==========
  { label: '译制片男声', value: 'BV408_streaming', category: '视频配音' },
  { label: '懒小羊', value: 'BV426_streaming', category: '视频配音' },
  { label: '清新文艺女声', value: 'BV428_streaming', category: '视频配音' },
  { label: '鸡汤女声', value: 'BV403_streaming', category: '视频配音' },
  { label: '智慧老者', value: 'BV158_streaming', category: '视频配音' },
  { label: '慈爱姥姥', value: 'BV157_streaming', category: '视频配音' },
  { label: '说唱小哥', value: 'BR001_streaming', category: '视频配音' },
  { label: '活力解说男', value: 'BV410_streaming', category: '视频配音' },
  { label: '影视解说小帅', value: 'BV411_streaming', category: '视频配音' },
  { label: '解说小帅-多情感', value: 'BV437_streaming', category: '视频配音' },
  { label: '影视解说小美', value: 'BV412_streaming', category: '视频配音' },
  { label: '纨绔青年', value: 'BV159_streaming', category: '视频配音' },
  { label: '直播一姐', value: 'BV418_streaming', category: '视频配音' },
  { label: '沉稳解说男', value: 'BV142_streaming', category: '视频配音' },
  { label: '潇洒青年', value: 'BV143_streaming', category: '视频配音' },
  { label: '阳光男声', value: 'BV056_streaming', category: '视频配音' },
  { label: '活泼女声', value: 'BV005_streaming', category: '视频配音' },
  { label: '小萝莉', value: 'BV064_streaming', category: '视频配音' },

  // ========== 特色音色 ==========
  { label: '奶气萌娃', value: 'BV051_streaming', category: '特色' },
  { label: '动漫海绵', value: 'BV063_streaming', category: '特色' },
  { label: '动漫海星', value: 'BV417_streaming', category: '特色' },
  { label: '动漫小新', value: 'BV050_streaming', category: '特色' },
  { label: '天才童声', value: 'BV061_streaming', category: '特色' },

  // ========== 广告配音 ==========
  { label: '促销男声', value: 'BV401_streaming', category: '广告' },
  { label: '促销女声', value: 'BV402_streaming', category: '广告' },
  { label: '磁性男声', value: 'BV006_streaming', category: '广告' },

  // ========== 新闻播报 ==========
  { label: '新闻女声', value: 'BV011_streaming', category: '新闻' },
  { label: '新闻男声', value: 'BV012_streaming', category: '新闻' },

  // ========== 方言 ==========
  { label: '东北老铁', value: 'BV021_streaming', category: '方言' },
  { label: '东北丫头', value: 'BV020_streaming', category: '方言' },
  { label: '西安佟掌柜', value: 'BV210_streaming', category: '方言' },
  { label: '沪上阿姐', value: 'BV217_streaming', category: '方言' },
  { label: '广西表哥', value: 'BV213_streaming', category: '方言' },
  { label: '甜美台妹', value: 'BV025_streaming', category: '方言' },
  { label: '台普男声', value: 'BV227_streaming', category: '方言' },
  { label: '港剧男神', value: 'BV026_streaming', category: '方言' },
  { label: '广东女仔', value: 'BV424_streaming', category: '方言' },
  { label: '相声演员', value: 'BV212_streaming', category: '方言' },
  { label: '重庆小伙', value: 'BV019_streaming', category: '方言' },
  { label: '四川甜妹儿', value: 'BV221_streaming', category: '方言' },
  { label: '重庆幺妹儿', value: 'BV423_streaming', category: '方言' },
  { label: '乡村企业家', value: 'BV214_streaming', category: '方言' },
  { label: '湖南妹坨', value: 'BV226_streaming', category: '方言' },
  { label: '长沙靓女', value: 'BV216_streaming', category: '方言' },
  { label: '方言灿灿', value: 'BV704_streaming', category: '方言' },

  // ========== 英语 ==========
  { label: '慵懒女声-Ava', value: 'BV511_streaming', category: '英语' },
  { label: '议论女声-Alicia', value: 'BV505_streaming', category: '英语' },
  { label: '情感女声-Lawrence', value: 'BV138_streaming', category: '英语' },
  { label: '美式女声-Amelia', value: 'BV027_streaming', category: '英语' },
  { label: '讲述女声-Amanda', value: 'BV502_streaming', category: '英语' },
  { label: '活力女声-Ariana', value: 'BV503_streaming', category: '英语' },
  { label: '活力男声-Jackson', value: 'BV504_streaming', category: '英语' },
  { label: '天才少女', value: 'BV421_streaming', category: '英语' },
  { label: 'Stefan', value: 'BV702_streaming', category: '英语' },
  { label: '天真萌娃-Lily', value: 'BV506_streaming', category: '英语' },
  { label: '亲切女声-Anna', value: 'BV040_streaming', category: '英语' },
  { label: '澳洲男声-Henry', value: 'BV516_streaming', category: '英语' },

  // ========== 日语 ==========
  { label: '元气少女', value: 'BV520_streaming', category: '日语' },
  { label: '萌系少女', value: 'BV521_streaming', category: '日语' },
  { label: '气质女声', value: 'BV522_streaming', category: '日语' },
  { label: '日语男声', value: 'BV524_streaming', category: '日语' },

  // ========== 豆包大模型音色 - 通用 ==========
  { label: '[豆包]Vivi', value: 'zh_female_vv_mars_bigtts', category: '豆包-通用' },
  { label: '[豆包]灿灿', value: 'zh_female_cancan_mars_bigtts', category: '豆包-通用' },
  { label: '[豆包]爽快思思', value: 'zh_female_shuangkuaisisi_moon_bigtts', category: '豆包-通用' },
  { label: '[豆包]温暖阿虎', value: 'zh_male_wennuanahu_moon_bigtts', category: '豆包-通用' },
  { label: '[豆包]少年梓辛', value: 'zh_male_shaonianzixin_moon_bigtts', category: '豆包-通用' },
  { label: '[豆包]邻家女孩', value: 'zh_female_linjianvhai_moon_bigtts', category: '豆包-通用' },
  { label: '[豆包]渊博小叔', value: 'zh_male_yuanboxiaoshu_moon_bigtts', category: '豆包-通用' },
  { label: '[豆包]阳光青年', value: 'zh_male_yangguangqingnian_moon_bigtts', category: '豆包-通用' },
  { label: '[豆包]甜美小源', value: 'zh_female_tianmeixiaoyuan_moon_bigtts', category: '豆包-通用' },
  { label: '[豆包]清澈梓梓', value: 'zh_female_qingchezizi_moon_bigtts', category: '豆包-通用' },
  { label: '[豆包]邻家男孩', value: 'zh_male_linjiananhai_moon_bigtts', category: '豆包-通用' },
  { label: '[豆包]甜美悦悦', value: 'zh_female_tianmeiyueyue_moon_bigtts', category: '豆包-通用' },
  { label: '[豆包]心灵鸡汤', value: 'zh_female_xinlingjitang_moon_bigtts', category: '豆包-通用' },
  { label: '[豆包]解说小明', value: 'zh_male_jieshuoxiaoming_moon_bigtts', category: '豆包-通用' },
  { label: '[豆包]开朗姐姐', value: 'zh_female_kailangjiejie_moon_bigtts', category: '豆包-通用' },
  { label: '[豆包]亲切女声', value: 'zh_female_qinqienvsheng_moon_bigtts', category: '豆包-通用' },
  { label: '[豆包]温柔小雅', value: 'zh_female_wenrouxiaoya_moon_bigtts', category: '豆包-通用' },
  { label: '[豆包]快乐小东', value: 'zh_male_xudong_conversation_wvae_bigtts', category: '豆包-通用' },
  { label: '[豆包]文静毛毛', value: 'zh_female_maomao_conversation_wvae_bigtts', category: '豆包-通用' },
  { label: '[豆包]悠悠君子', value: 'zh_male_M100_conversation_wvae_bigtts', category: '豆包-通用' },
  { label: '[豆包]魅力苏菲', value: 'zh_female_sophie_conversation_wvae_bigtts', category: '豆包-通用' },
  { label: '[豆包]阳光阿辰', value: 'zh_male_qingyiyuxuan_mars_bigtts', category: '豆包-通用' },
  { label: '[豆包]甜美桃子', value: 'zh_female_tianmeitaozi_mars_bigtts', category: '豆包-通用' },
  { label: '[豆包]清新女声', value: 'zh_female_qingxinnvsheng_mars_bigtts', category: '豆包-通用' },
  { label: '[豆包]知性女声', value: 'zh_female_zhixingnvsheng_mars_bigtts', category: '豆包-通用' },
  { label: '[豆包]清爽男大', value: 'zh_male_qingshuangnanda_mars_bigtts', category: '豆包-通用' },
  { label: '[豆包]温柔小哥', value: 'zh_male_wenrouxiaoge_mars_bigtts', category: '豆包-通用' },

  // ========== 豆包 - 角色扮演 ==========
  { label: '[豆包]傲娇霸总', value: 'zh_male_aojiaobazong_moon_bigtts', category: '豆包-角色' },
  { label: '[豆包]病娇姐姐', value: 'ICL_zh_female_bingjiaojiejie_tob', category: '豆包-角色' },
  { label: '[豆包]妩媚御姐', value: 'ICL_zh_female_wumeiyujie_tob', category: '豆包-角色' },
  { label: '[豆包]傲娇女友', value: 'ICL_zh_female_aojiaonvyou_tob', category: '豆包-角色' },
  { label: '[豆包]冷酷哥哥', value: 'ICL_zh_male_lengkugege_v1_tob', category: '豆包-角色' },
  { label: '[豆包]成熟姐姐', value: 'ICL_zh_female_chengshujiejie_tob', category: '豆包-角色' },
  { label: '[豆包]贴心女友', value: 'ICL_zh_female_tiexinnvyou_tob', category: '豆包-角色' },
  { label: '[豆包]性感御姐', value: 'ICL_zh_female_xingganyujie_tob', category: '豆包-角色' },
  { label: '[豆包]病娇弟弟', value: 'ICL_zh_male_bingjiaodidi_tob', category: '豆包-角色' },
  { label: '[豆包]傲慢少爷', value: 'ICL_zh_male_aomanshaoye_tob', category: '豆包-角色' },
  { label: '[豆包]腹黑公子', value: 'ICL_zh_male_fuheigongzi_tob', category: '豆包-角色' },
  { label: '[豆包]暖心学姐', value: 'ICL_zh_female_nuanxinxuejie_tob', category: '豆包-角色' },
  { label: '[豆包]可爱女生', value: 'ICL_zh_female_keainvsheng_tob', category: '豆包-角色' },
  { label: '[豆包]知性温婉', value: 'ICL_zh_female_zhixingwenwan_tob', category: '豆包-角色' },
  { label: '[豆包]暖心体贴', value: 'ICL_zh_male_nuanxintitie_tob', category: '豆包-角色' },
  { label: '[豆包]开朗轻快', value: 'ICL_zh_male_kailangqingkuai_tob', category: '豆包-角色' },
  { label: '[豆包]活泼爽朗', value: 'ICL_zh_male_huoposhuanglang_tob', category: '豆包-角色' },
  { label: '[豆包]率真小伙', value: 'ICL_zh_male_shuaizhenxiaohuo_tob', category: '豆包-角色' },
  { label: '[豆包]温柔文雅', value: 'ICL_zh_female_wenrouwenya_tob', category: '豆包-角色' },
  { label: '[豆包]温柔女神', value: 'ICL_zh_female_wenrounvshen_239eff5e8ffa_tob', category: '豆包-角色' },
  { label: '[豆包]炀炀', value: 'ICL_zh_male_BV705_streaming_cs_tob', category: '豆包-角色' },

  // ========== 豆包 - 视频配音 ==========
  { label: '[豆包]擎苍', value: 'zh_male_qingcang_mars_bigtts', category: '豆包-配音' },
  { label: '[豆包]霸气青叔', value: 'zh_male_baqiqingshu_mars_bigtts', category: '豆包-配音' },
  { label: '[豆包]温柔淑女', value: 'zh_female_wenroushunv_mars_bigtts', category: '豆包-配音' },
  { label: '[豆包]儒雅青年', value: 'zh_male_ruyaqingnian_mars_bigtts', category: '豆包-配音' },
  { label: '[豆包]悬疑解说', value: 'zh_male_changtianyi_mars_bigtts', category: '豆包-配音' },
  { label: '[豆包]古风少御', value: 'zh_female_gufengshaoyu_mars_bigtts', category: '豆包-配音' },
  { label: '[豆包]活力小哥', value: 'zh_male_yangguangqingnian_mars_bigtts', category: '豆包-配音' },
  { label: '[豆包]鸡汤妹妹', value: 'zh_female_jitangmeimei_mars_bigtts', category: '豆包-配音' },
  { label: '[豆包]贴心女声', value: 'zh_female_tiexinnvsheng_mars_bigtts', category: '豆包-配音' },
  { label: '[豆包]萌丫头', value: 'zh_female_mengyatou_mars_bigtts', category: '豆包-配音' },
  { label: '[豆包]磁性解说男声', value: 'zh_male_jieshuonansheng_mars_bigtts', category: '豆包-配音' },
  { label: '[豆包]广告解说', value: 'zh_male_chunhui_mars_bigtts', category: '豆包-配音' },
  { label: '[豆包]少儿故事', value: 'zh_female_shaoergushi_mars_bigtts', category: '豆包-配音' },
  { label: '[豆包]天才童声', value: 'zh_male_tiancaitongsheng_mars_bigtts', category: '豆包-配音' },
  { label: '[豆包]俏皮女声', value: 'zh_female_qiaopinvsheng_mars_bigtts', category: '豆包-配音' },
  { label: '[豆包]懒音绵宝', value: 'zh_male_lanxiaoyang_mars_bigtts', category: '豆包-配音' },
  { label: '[豆包]亮嗓萌仔', value: 'zh_male_dongmanhaimian_mars_bigtts', category: '豆包-配音' },
  { label: '[豆包]暖阳女声', value: 'zh_female_kefunvsheng_mars_bigtts', category: '豆包-配音' },

  // ========== 豆包 - 特色/IP ==========
  { label: '[豆包]猴哥', value: 'zh_male_sunwukong_mars_bigtts', category: '豆包-IP' },
  { label: '[豆包]熊二', value: 'zh_male_xionger_mars_bigtts', category: '豆包-IP' },
  { label: '[豆包]佩奇猪', value: 'zh_female_peiqi_mars_bigtts', category: '豆包-IP' },
  { label: '[豆包]樱桃丸子', value: 'zh_female_yingtaowanzi_mars_bigtts', category: '豆包-IP' },
  { label: '[豆包]武则天', value: 'zh_female_wuzetian_mars_bigtts', category: '豆包-IP' },
  { label: '[豆包]顾姐', value: 'zh_female_gujie_mars_bigtts', category: '豆包-IP' },
  { label: '[豆包]四郎', value: 'zh_male_silang_mars_bigtts', category: '豆包-IP' },
  { label: '[豆包]鲁班七号', value: 'zh_male_lubanqihao_mars_bigtts', category: '豆包-IP' },

  // ========== 豆包 - 多情感 ==========
  { label: '[豆包]冷酷哥哥-多情感', value: 'zh_male_lengkugege_emo_v2_mars_bigtts', category: '豆包-多情感' },
  { label: '[豆包]高冷御姐-多情感', value: 'zh_female_gaolengyujie_emo_v2_mars_bigtts', category: '豆包-多情感' },
  { label: '[豆包]傲娇霸总-多情感', value: 'zh_male_aojiaobazong_emo_v2_mars_bigtts', category: '豆包-多情感' },
  { label: '[豆包]邻居阿姨-多情感', value: 'zh_female_linjuayi_emo_v2_mars_bigtts', category: '豆包-多情感' },
  { label: '[豆包]儒雅男友-多情感', value: 'zh_male_ruyayichen_emo_v2_mars_bigtts', category: '豆包-多情感' },
  { label: '[豆包]俊朗男友-多情感', value: 'zh_male_junlangnanyou_emo_v2_mars_bigtts', category: '豆包-多情感' },
  { label: '[豆包]柔美女友-多情感', value: 'zh_female_roumeinvyou_emo_v2_mars_bigtts', category: '豆包-多情感' },
  { label: '[豆包]阳光青年-多情感', value: 'zh_male_yangguangqingnian_emo_v2_mars_bigtts', category: '豆包-多情感' },
  { label: '[豆包]爽快思思-多情感', value: 'zh_female_shuangkuaisisi_emo_v2_mars_bigtts', category: '豆包-多情感' },
  { label: '[豆包]深夜播客', value: 'zh_male_shenyeboke_emo_v2_mars_bigtts', category: '豆包-多情感' },

  // ========== 豆包 - 英文 ==========
  { label: '[豆包]Lauren', value: 'en_female_lauren_moon_bigtts', category: '豆包-英文' },
  { label: '[豆包]Amanda', value: 'en_female_amanda_mars_bigtts', category: '豆包-英文' },
  { label: '[豆包]Adam', value: 'en_male_adam_mars_bigtts', category: '豆包-英文' },
  { label: '[豆包]Jackson', value: 'en_male_jackson_mars_bigtts', category: '豆包-英文' },
  { label: '[豆包]Emily', value: 'en_female_emily_mars_bigtts', category: '豆包-英文' },
  { label: '[豆包]Smith', value: 'en_male_smith_mars_bigtts', category: '豆包-英文' },
  { label: '[豆包]Anna', value: 'en_female_anna_mars_bigtts', category: '豆包-英文' },
  { label: '[豆包]Sarah', value: 'en_female_sarah_mars_bigtts', category: '豆包-英文' },
  { label: '[豆包]Dryw', value: 'en_male_dryw_mars_bigtts', category: '豆包-英文' },
  { label: '[豆包]Nara', value: 'en_female_nara_moon_bigtts', category: '豆包-英文' },
  { label: '[豆包]Bruce', value: 'en_male_bruce_moon_bigtts', category: '豆包-英文' },
  { label: '[豆包]Michael', value: 'en_male_michael_moon_bigtts', category: '豆包-英文' },
  { label: '[豆包]Daisy', value: 'en_female_dacey_conversation_wvae_bigtts', category: '豆包-英文' },
  { label: '[豆包]Luna', value: 'en_female_sarah_new_conversation_wvae_bigtts', category: '豆包-英文' },
  { label: '[豆包]Owen', value: 'en_male_charlie_conversation_wvae_bigtts', category: '豆包-英文' },
  { label: '[豆包]Lucas', value: 'zh_male_M100_conversation_wvae_bigtts', category: '豆包-英文' },
  { label: '[豆包]Candice-多情感', value: 'en_female_candice_emo_v2_mars_bigtts', category: '豆包-英文' },
  { label: '[豆包]Serena-多情感', value: 'en_female_skye_emo_v2_mars_bigtts', category: '豆包-英文' },
  { label: '[豆包]Glen-多情感', value: 'en_male_glen_emo_v2_mars_bigtts', category: '豆包-英文' },
  { label: '[豆包]Sylus-多情感', value: 'en_male_sylus_emo_v2_mars_bigtts', category: '豆包-英文' },

  // ========== 豆包 - 客服 ==========
  { label: '[豆包]理性圆子', value: 'ICL_zh_female_lixingyuanzi_cs_tob', category: '豆包-客服' },
  { label: '[豆包]清甜桃桃', value: 'ICL_zh_female_qingtiantaotao_cs_tob', category: '豆包-客服' },
  { label: '[豆包]清晰小雪', value: 'ICL_zh_female_qingxixiaoxue_cs_tob', category: '豆包-客服' },
  { label: '[豆包]开朗婷婷', value: 'ICL_zh_female_kailangtingting_cs_tob', category: '豆包-客服' },
  { label: '[豆包]温婉珊珊', value: 'ICL_zh_female_wenwanshanshan_cs_tob', category: '豆包-客服' },
  { label: '[豆包]甜美小雨', value: 'ICL_zh_female_tianmeixiaoyu_cs_tob', category: '豆包-客服' },
  { label: '[豆包]灵动欣欣', value: 'ICL_zh_female_lingdongxinxin_cs_tob', category: '豆包-客服' },
  { label: '[豆包]乖巧可儿', value: 'ICL_zh_female_guaiqiaokeer_cs_tob', category: '豆包-客服' },
  { label: '[豆包]阳光洋洋', value: 'ICL_zh_male_yangguangyangyang_cs_tob', category: '豆包-客服' },
];

// ============================================================
// 火山引擎情感/风格列表 (完整版)
// https://www.volcengine.com/docs/6561/1257544
// ============================================================

export const VOLCANO_EMOTIONS: Record<string, string> = {
  // 基础情感
  'happy': '开心',
  'sad': '悲伤',
  'angry': '愤怒',
  'scare': '害怕',
  'hate': '厌恶',
  'surprise': '惊讶',
  'tear': '哭腔',
  'novel_dialog': '平和',
  'excited': '激动',
  'coldness': '冷漠',
  'neutral': '中性',
  'depressed': '沮丧',
  'fear': '恐惧',

  // 交流情感
  'pleased': '愉悦',
  'sorry': '抱歉',
  'annoyed': '嗔怪',
  'shy': '害羞',
  'tender': '温柔',

  // 专业风格
  'customer_service': '客服',
  'professional': '专业',
  'serious': '严肃',
  'assistant': '助手',
  'advertising': '广告',
  'news': '新闻播报',
  'entertainment': '娱乐八卦',

  // 叙述风格
  'narrator': '旁白-舒缓',
  'narrator_immersive': '旁白-沉浸',
  'storytelling': '讲故事',
  'radio': '情感电台',
  'chat': '自然对话',

  // 特色风格
  'comfort': '安慰鼓励',
  'lovey-dovey': '撒娇',
  'energetic': '可爱元气',
  'conniving': '绿茶',
  'tsundere': '傲娇',
  'charming': '娇媚',
  'yoga': '瑜伽',
  'tension': '咆哮/焦急',
  'magnetic': '磁性',
  'vocal-fry': '气泡音',
  'asmr': '低语ASMR',
  'dialect': '方言',

  // 英文专用情感
  'warm': '温暖',
  'affectionate': '深情',
  'authoritative': '权威',
};
