import { DimensionValue, View } from 'react-native';
import { StyleSheet } from 'react-native';

export const AppStyles = {
    color: {
        primary: '#2d4cc9',
        secondary: '#26b640', //"#26b65c",
        warning: 'rgb(209, 70, 51)',
        warning_faded: 'rgba(209, 69, 51, 0.771)',
        text_primary: '#3b3d44',
        text_faded: '#838488',
        background: 'rgb(235, 236, 237)',
        accent_back: '#e4e4e4',
        accent_dark: '#475569',
        elem_back: '#ffffffff',
        dark_btn: '#000000',
        primary_faded: '#DFF2FF',
        block: {
            main_washing: '#2d4cc9',
            faded_washing: '#dff2ff',
            transp_washing: '#2d4cc9cc',
            main_temperature: '#f49e1e',
            faded_temperature: '#fde9c8',
            transp_temperature: '#f49e1ecc',
            main_reagent: '#26b640',
            faded_reagent: '#ddffed',
            transp_reagent: '#26b640cc',
        },
    },

    sizes: {
        regular: 16,
        small: 14,
        big: 20,
    },

    layout: {
        border_radius: 8,
        elem_padding: 10,
        box_padding: 20,
        main_flex: 10,
        nav_flex: 1,
        nav_width_closed: '9%' as DimensionValue,
        nav_width_opened: '20%' as DimensionValue,
        main_width: '91%' as DimensionValue,
    },
};

export const globalElementStyle = StyleSheet.create({
    page_container: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        top: 0,
        width: AppStyles.layout.main_width,
        height: '100%',
        //paddingTop: 15,
    },
});

export function MainContainer(props: any) {
    return (
        <View
            style={{
                flexDirection: 'row',
                flex: 1,
                backgroundColor: AppStyles.color.background,
            }}
        >
            {props.children}
        </View>
    );
}
