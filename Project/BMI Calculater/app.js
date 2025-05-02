const form = document.querySelector('form');

        form.addEventListener('submit',function(e) 
        {
            e.preventDefault();

            const height = parseInt(document.getElementById('height').value);
            const weight = parseInt(document.getElementById('weight').value);
            const result = document.getElementById('result');
            let msg = document.getElementById('msg')

            if(height === '' || height < 0 || isNaN(height))
            {
                result.innerHTML = `pls enter a valid height ${height}`
            } 
            if(weight === '' || weight < 0 || isNaN(weight))
            {
                result.innerHTML = `pls enter a valid weight ${weight}`
            }
            
            const bmi = (weight / ((height * height)/10000)).toFixed(2)
            result.innerHTML = `<span>${bmi}</span>`
            
            
            let message = '';
            if (bmi < 18.6){
                message = 'You are under weight';
            } else if(bmi >= 18.6 && bmi<= 24.9){
                message = 'You are in normal Range'
            }else{
                message = 'You are over weight'
            }
            msg.innerHTML = `<h1>${message}</h1>`
            
        })