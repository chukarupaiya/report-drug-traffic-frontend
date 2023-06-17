function distance(drug){
        var drug_copy=drug
        var neighbour=[]

        var freq=[]
        for(var i=0;i<drug.length;i++){
            freq.push(0)
        }
        var freq_copy=[]
        for(var i=0;i<drug.length;i++){
            var count=0;
            for(var j=0;j<drug.length;j++){
                
                
                    if(drug[i].latitude==drug[j].latitude && drug[i].longitude==drug[j].longitude){
                        if(freq[j]>0){
                            count=0
                            break
                        }
                            count+=1
                            
                    
                }
            }

            freq[i]=count;
        }

        var max=0,maxlat=0,maxlon=0;
        for(var i=0;i<freq.length;i++){
            if(freq[i]>max){
                max=freq[i];
                maxlat=drug[i].latitude;
                maxlon=drug[i].longitude;
            }
    }




    var ilat=maxlat;
    var ilon=maxlon;

    var result=[]

    var total_freq=0.0;

    for(let i=0;i<drug.length;i++){
    
            lon1 =  ilon * Math.PI / 180;
            lon2 = drug[i].longitude * Math.PI / 180;
            lat1 = ilat * Math.PI / 180;
            lat2 = drug[i].latitude * Math.PI / 180;
    
        
            let dlon = drug[i].longitude - ilon;
            let dlat = drug[i].latitude - ilat;
            let a = Math.pow(Math.sin(dlat / 2), 2)
                    + Math.cos(ilat) * Math.cos(drug[i].latitude)
                    * Math.pow(Math.sin(dlon / 2),2);
                
            let c = 2 * Math.asin(Math.sqrt(a));
    
        
            let r = 6371;
    
            
            console.log(c*r)
            if(c*r<=15000){
                neighbour.push(1)
            }
            else{
                neighbour.push(0)
            }
    }
    var p=0.0

    for(var i=0;i<neighbour.length;i++){
        if(neighbour[i]==1){
            p+=freq[i]
        }
        total_freq+=freq[i]
    }
    p=(p/total_freq)*100
    console.log(p)
    return p;
}


var drug=[{latitude:25,longitude:30},{latitude:32,longitude:12},{latitude:25,longitude:30},{latitude:31,longitude:20}]

distance(drug)