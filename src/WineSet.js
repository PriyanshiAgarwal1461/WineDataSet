import productsData from './product.json';
import './WineSet.css';

export const WineSet = () => {
    // find which alcohol class are there
    const AlcoholClasssArr = [];
    productsData.products.forEach((item) => {
        if (AlcoholClasssArr.indexOf(item.Alcohol) === -1) {
            AlcoholClasssArr.push(item.Alcohol)
        }
    })

    // seprate data on basis of class
    let WineData = [];
    for (let i = 0; i < AlcoholClasssArr.length; i++) {
        const AlcoholSeperateClass = productsData.products.filter((item) => {
            return item.Alcohol === AlcoholClasssArr[i]
        })

        WineData.push(AlcoholSeperateClass);

    }

// form array having data of which mean,mode and median have to be calculated
    const AlcoholClassFlavanoids = [];
    const AlcoholClassGamma = [];
    for (let i = 0; i < WineData.length; i++) {
        const WineDataSet = WineData[i];
        const AlcoholFlavanoids = [];
        const AlcoholGamma = [];
        WineDataSet.forEach((item) => {
            AlcoholFlavanoids.push(item.Flavanoids);
            let Gamma = (item.Ash * item.Hue) / item.Magnesium;
            AlcoholGamma.push(Gamma);
        })
        AlcoholClassFlavanoids.push(AlcoholFlavanoids)
        AlcoholClassGamma.push(AlcoholGamma)
    }

    // function to perform mean
    const CalculateMean = ((item) => {
        const sum = item.reduce((acc, cur) => {
            return acc + cur
        })
        let mean = sum / item.length;
        return mean.toFixed(3)
    })

    // function to perform median
    const CalculateMedian = ((item) => {
        const sorted = item.sort();
        const length = sorted.length;
        const mid = Math.floor(length / 2);

        if (length % 2 === 0) {
            return ((sorted[mid - 1] + sorted[mid]) / 2).toFixed(3);
        } else {
            return (sorted[mid]).toFixed(3);
        }
    })

    // function to perform mode
    const CalculateMode = ((item) => {
        let mode = 0;
        let maxCount = 0;

        for (let i = 0; i < item.length; i++) {
            let count = 0;

            for (let j = 0; j < item.length; j++) {
                if (item[j] === item[i]) {
                    count++;
                }
            }

            if (count > maxCount) {
                mode = item[i];
                maxCount = count;
            }
        }

        return mode.toFixed(3);
    }
    )

    return (
        <div>
            <div className='wine-data-set'>
                <table>
                    <thead>
                        <tr>
                            <th>Measures</th>
                            {AlcoholClasssArr.map((item) => {
                                return (
                                    <td>class{item}</td>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Flavanoids Mean</td>
                            {AlcoholClassFlavanoids.map((item) => {
                                return (
                                    <td>{CalculateMean(item)}</td>
                                )
                            })}
                        </tr>
                        <tr>
                            <td>Flavanoids Median</td>
                            {AlcoholClassFlavanoids.map((item) => {
                                return (
                                    <td>{CalculateMedian(item)}</td>
                                )
                            })}
                        </tr>
                        <tr>
                            <td>Flavanoids Mode</td>
                            {AlcoholClassFlavanoids.map((item) => {
                                return (
                                    <td>{CalculateMode(item)}</td>
                                )
                            })}
                        </tr>
                    </tbody>

                </table>
            </div>
            <div className='wine-data-set'>
                <table>
                    <thead>
                        <tr>
                            <th>Measures</th>
                            {AlcoholClasssArr.map((item) => {
                                return (
                                    <td>class{item}</td>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Gamma Mean</td>
                            {AlcoholClassGamma.map((item) => {
                                return (
                                    <td>{CalculateMean(item)}</td>
                                )
                            })}

                        </tr>
                        <tr>
                            <td>Gamma Median</td>
                            {AlcoholClassGamma.map((item) => {
                                return (
                                    <td>{CalculateMedian(item)}</td>
                                )
                            })}
                        </tr>
                        <tr>
                            <td>Gamma Mode</td>
                            {AlcoholClassGamma.map((item) => {
                                return (
                                    <td>{CalculateMode(item)}</td>
                                )
                            })}
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    )

}