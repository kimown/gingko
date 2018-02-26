import {
    StyleSheet
} from "react-native";

const brandPrimary = '#24A8E8';

export default {
    // 颜色
    // --
    color_base: '#333',
    color_text_caption: '#888888',               // 辅助描述
    color_link: brandPrimary,
    color_white: '#fff',
    color_disabled: '#999',
    color_warning: '#FF0000',
    border_color: '#ddd',
    color_text_disable: '#999',
    color_label: '#666',

    // 背景色
    // ---
    fill_base: '#fff',
    fill_tap: '#bbb',

    // 边框色
    // ---
    border_color_base: '#ddd',
    border_color_primary: brandPrimary,

    // 圆角
    // ---
    radius: 4,

    // 边框尺寸
    // ---
    border_width: StyleSheet.hairlineWidth,

    // 按钮
    // ---
    btn_height: 40,
    btn_font_size: 18,

    btn_height_sm: 30,
    // btn_height_lg: 60,

    btn_font_size_sm: 16,
    // btn_font_size_lg: 20,

    btn_default_fill: '#fff',
    btn_default_fill_tap: 'rgba(13,141,203,0.05)',

    btn_primary_fill: brandPrimary,
    btn_primary_fill_tap: '#0D8DCB',

    btn_warning_fill: '#fff',
    btn_warning_fill_tap: 'rgba(234,0,0,0.05)',
    btn_warning_tap_color: '#EA0000',

    btn_disabled_fill: '#aaa',

    // 间距
    // ---
    // 水平间距
    h_spacing_sm: 5,
    h_spacing_md: 8,
    h_spacing_lg: 15,

    // 垂直间距
    // ---
    v_spacing_xs: 3,
    v_spacing_sm: 6,
    v_spacing_md: 9,
    v_spacing_lg: 15,
    v_spacing_xl: 21,

    // 字体尺寸
    // ---
    font_size_caption_sm: 14,
    font_size_caption: 18,
    font_size_heading: 20,
    font_size_base: 16,
    font_size_base_sm: 14,
    font_size_tip: 12,      //错误提示等

    // 行高lineHeight
    // ---
    line_height_plus_md: 6,

    // 指示器尺寸 Indicator TODO 大小待定
    // ---
    indicator_sm: 14,
    indicator_md: 18,
    indicator_lg: 24,

    // modal
    // ---
    modal_mask_color: 'rgba(0, 0, 0, .3)',
    modal_main_zIndex: 999,
    modal_main_width: 270,
}

