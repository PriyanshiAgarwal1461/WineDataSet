import productsData from './product.json';
import './WineSet.css';

export const WineSet = () => {

//filter different alcohol class
    const Alcohol1 = productsData.products.filter((item)=>{
        return item.Alcohol ===1
    })
    const Alcohol2 = productsData.products.filter((item)=>{
        return item.Alcohol ===2
    })
    const Alcohol3 = productsData.products.filter((item)=>{
        return item.Alcohol ===3
    })

// form array of different class having values on which calculations have to be performed
    let Alcohol1Flavanoids =[]
    let Alcohol2Flavanoids =[]
    let Alcohol3Flavanoids =[]
    let Alcohol1Gamma =[]
    let Alcohol2Gamma =[]
    let Alcohol3Gamma =[]

    Alcohol1.forEach((item)=>{
        Alcohol1Flavanoids.push(item.Flavanoids);
        let Gamma = (item.Ash * item.Hue) / item.Magnesium;
        Alcohol1Gamma.push(Gamma);
    })
    Alcohol2.forEach((item)=>{
        Alcohol2Flavanoids.push(item.Flavanoids)
        let Gamma = (item.Ash * item.Hue) / item.Magnesium;
        Alcohol2Gamma.push(Gamma);
    })
    Alcohol3.forEach((item)=>{
        Alcohol3Flavanoids.push(item.Flavanoids)
        let Gamma = (item.Ash * item.Hue) / item.Magnesium;
        Alcohol3Gamma.push(Gamma);
    })

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
                        <th>Class 1</th>
                        <th>Class 2</th>
                        <th>Class 3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Flavanoids Mean</td>
                        <td>{CalculateMean(Alcohol1Flavanoids)}</td>
                        <td>{CalculateMean(Alcohol2Flavanoids)}</td>
                        <td>{CalculateMean(Alcohol3Flavanoids)}</td>

                    </tr>
                    <tr>
                        <td>Flavanoids Median</td>
                        <td>{CalculateMedian(Alcohol1Flavanoids)}</td>
                        <td>{CalculateMedian(Alcohol2Flavanoids)}</td>
                        <td>{CalculateMedian(Alcohol3Flavanoids)}</td>
                    </tr>
                    <tr>
                        <td>Flavanoids Mode</td>
                        <td>{CalculateMode(Alcohol1Flavanoids)}</td>
                        <td>{CalculateMode(Alcohol2Flavanoids)}</td>
                        <td>{CalculateMode(Alcohol3Flavanoids)}</td>
                    </tr>
                </tbody>

            </table>
            </div>
            <div className='wine-data-set'>
            <table>
                <thead>
                    <tr>
                        <th>Measures</th>
                        <th>Class 1</th>
                        <th>Class 2</th>
                        <th>Class 3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Gamma Mean</td>
                        <td>{CalculateMean(Alcohol1Gamma)}</td>
                        <td>{CalculateMean(Alcohol2Gamma)}</td>
                        <td>{CalculateMean(Alcohol3Gamma)}</td>

                    </tr>
                    <tr>
                        <td>Gamma Median</td>
                        <td>{CalculateMedian(Alcohol1Gamma)}</td>
                        <td>{CalculateMedian(Alcohol2Gamma)}</td>
                        <td>{CalculateMedian(Alcohol3Gamma)}</td>
                    </tr>
                    <tr>
                        <td>Gamma Mode</td>
                        <td>{CalculateMode(Alcohol1Gamma)}</td>
                        <td>{CalculateMode(Alcohol2Gamma)}</td>
                        <td>{CalculateMode(Alcohol3Gamma)}</td>
                    </tr>
                </tbody>

            </table>
            </div>
        </div>
    )

}