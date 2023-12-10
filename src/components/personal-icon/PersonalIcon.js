import './PersonalIcon.css'

const PersonalIcon = ({name, customHeight}) => {
    console.log(customHeight)
    const getIconByName = (name) => {
        const images = importAll(require.context('../../assets/icons', false, /\.(png|jpe?g|svg)$/));

        return images[`${name}.png`];
    }

    const importAll = (r) => {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    return (
        <img src={getIconByName(name)} style={{height: `${customHeight}`}} />
    )
}

export default PersonalIcon;