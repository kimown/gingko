/**
 * Created by beilunyang on 2018/2/9
 */
import * as React from 'react';
import {
    Picker,
    Text,
    View,
    Platform,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import AndroidPicker from './Picker.android';
import MultiPicker from './MultiPicker';
import Popup from '../Popup';
import {
    IItemProps,
    IPickerProps,
} from './propsType';
import styles from './style';

const isAndroid = Platform.OS === 'android';

export default class extends React.Component<IPickerProps, any> {

    static Item = Picker.Item;

    static defaultProps: IPickerProps = {
        dismissText: '取消',
        okText: '确定',
        onDismiss: () => {},
        onOk: () => {},
        title: '',
        data: [],
        value: [],
        style: {},
        itemStyle: [],
        columnStyle: [],
        visible: false,
    };

    renderHeader = () => {
        const {
            dismissText,
            onOk,
            onDismiss,
            okText,
            title,
        } = this.props;
        return (
            <View style={styles.header}>
                <TouchableOpacity onPress={onDismiss}>
                    <Text style={styles.dismiss}>{dismissText}</Text>
                </TouchableOpacity>
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity onPress={(onOk as Function).bind(null, this.props.value)}>
                    <Text style={styles.ok}>{okText}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    renderItems = (group: IItemProps[]) => {
        return group.map(({ label, value }, idx) => {
            if (label === undefined || label === null) {
                return (
                    <Picker.Item label={String(value)} value={value} key={idx} />
                );
            }
            return (
                <Picker.Item label={String(label)} value={value} key={idx} />
            );
        });
    }

    renderCols = () => {
        const { data } = this.props;
        if (Array.isArray(data)) {
            const Pick = isAndroid ? AndroidPicker : Picker;
            return data.map((group, idx) => {
                return (
                    <Pick key={idx}>
                        {this.renderItems(group)}
                    </Pick>
                );
            });
        }
        return null;
    }

    renderPicker = () => {
        const Pick = isAndroid ? AndroidPicker : Picker;
        const {
            children,
            onChange,
            value,
            style,
            itemStyle,
            columnStyle,
            ...rest,
        } = this.props;
        if (children) {
            const itemSty = Array.isArray(itemStyle) ? itemStyle[0] : itemStyle;
            const columnSty = Array.isArray(columnStyle) ? columnStyle[0] : columnStyle;
            return (
                <Pick
                    {...rest}
                    itemStyle={StyleSheet.flatten(itemSty)}
                    style={StyleSheet.flatten([style, columnSty])}
                    onValueChange={onChange}
                    selectedValue={value}
                >
                    {children}
                </Pick>
            );
        }
        const itemSty = Array.isArray(itemStyle) ? itemStyle : [itemStyle];
        const columnSty = Array.isArray(columnStyle) ? columnStyle : [columnStyle];
        return (
            <MultiPicker
                {...rest}
                style={style}
                itemStyle={itemSty}
                columnStyle={columnSty}
                onChange={onChange}
                value={value}
            >
                {this.renderCols()}
            </MultiPicker>
        );
    }

    render() {
        const {
            visible,
        } = this.props;
        return (
            <Popup
                visible={visible as boolean}
            >
                <View style={styles.container}>
                    {this.renderHeader()}
                    {this.renderPicker()}
                </View>
            </Popup>
        );
    }
}
