<template>
    <div>
        <section data-v-841e3554="" class="voucher_container">
            <section data-v-841e3554="" class="hongbao_description voucher_header">
                <span style="float:right;color:#3190e8;"><a href="#">?</a><i>商家代金券说明</i></span>
            </section> 
            <section data-v-841e3554="" class="unable_use">
                <img data-v-841e3554="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACqCAMAAAAgPYI2AAADAFBMVEVMaXHP4O/b6PTz9/zO4PHe5Ojf5/yl0frC6f/e5eH///9mvP/N4PHT4/FWqv5mvP/O3/DT4u1tt/hXtP9tvv3a5OrU4/LO4PL+/v/M3/FnvP9lu//M3/HO4PLN3/L+//9nvP/P4fHO4PLN3/HN4PLP4fDQ4PDR4e/i7fb91aT+/v/N4PHN4PHX4+3+/v/+/v/N3e5mvP9iu/9nu//b5eyjxeMtmvzQ6v7+///R4fH9/v9lu//+//////5nvP+mxuRmvP/R4fJlvP9qvf/Z5OqmxuRpvP8znfz/1p/////5+/3+///N4PH8/f/f5+6kxuPa5Or////c5u0um/ufx+grmv8kk/cum/z81p3M3/H7/P7Y4+nZ5Oo3n/yRwepvwf9wwP/C2e04oPykxuMplvgkkPHR4fFSr/6ZweBTsPyKttspl/nw9frr8vn1+Pv51aX/1qL91qJNrPz/1aIwnf++1+vEzMSUvN//1qJ7v/NQrv250+r////M3/HO4fFnvP/O4PHN4PHP4fItmvzQ4fLR4fI6ofzM4PHR4vLa5Or///9wwf/K3vHH3fBpvv9pvf9lu/9twP/P4fErmfzL3/IwnPzG3O9rv/9guv8znv0llvxmvP//1qL+//9Usf/U4/P5/P3J3fA7ov1juv/W5vRqvv9at/8ilPxPsv82n/xMrP73+v04ofzu9fri7ff7/f/1+fwwnf9Vtv9euP/H3PD9/f8fh+RLsP/x9/vZ6PXf6/bZ5Orr8/no8fnP4fTm7/jN3/IsmvzO4PLg5/B0wv7H5P9RtP+b0fz/1JRCqP7c5ekomP0Tg+nZ5fFZtP6Bx/5Nrv6Tzf3d6vbZ4+lHr///2Ze74f/t+P/N4fPE2u/V4eh6xf6j1//Q4fHk6vDg3teKyv3W5PDM4vi02PXp7fLk9P+iz/cdjO8Tgufc5vGu2vzl0rJKq/6/2/Q1me8Tj/7S4u/Q4fGYv+Bkuf7W7f/H3vPp28n52KzK6P+kxuSqyNa4ys368u7S4O3R4/Lo5OBHu2ueAAAA1HRSTlMAICkYnRQGBAEKMvSGPAydWGsUMiLZM7e27Lju1d2rWnJi9OTLeUhOJCGv+8WMetgPxmTez4eO/uHrodGN+0NgUfp+sMSvJ1b9vc/nwESC3q3xnONNHYa5Y3Rw67l0MPPUlM/v0rTR/kHgy/uijk+GsJ3r5O7GtOLi7tTW/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ueBe6AAABBsSURBVHja7Z15dBPXucCvjY1tMBgDYWnCvjZAWBNKFhrCkjTN3qRJk7Rpmqa8tm9tX/uWM+OxZBuLo1El2fVYxghJlpHlyJYUSdQW2PFDNnYMsY2NCwhjyk7gseQkaZJuvHdnkUb7aMDvvHPl+XlD8uEPfuf7vvnmu3cuQEJCQkJCQkJCQkJC4v+FHzz/TQD55stAQpi/e34VkBBibFoWoNn6IJBIRHY2TMCtW9kMlGQlJmtsFsiZ+jJTr7KkNBTWBb+9LAWVMNlMzVpK/0FCqGAxjn4mhZUQD8zhImvrp2NAdhaQiM9SDLt/HNNefboVSLIEAguDPJoNst/5dDKQSMz9GM3KZx/89G0gIcC3MBb7O9KlUJAZGMeLD8BeVCpZCXkUC/LtObDXGt26cjLT0pampWWOBTEZh4UwYxzIyh6VkqZNys2Y/pMFG+ZvKikZ3jR/w6yFszMWLUmPDJ2VWCgPZ446WenzMhZuKAmlOMiCZ3KXjIkMLZ4xoyuiFq/4SUkkxTxyyLLluRNAgDkvhpStUeVqccYGhaJEQBbDrBXTAMvbzmDNGkWulubOUkAEZXGULc+nJ1er/u1PL814DEbVjDlg1DBhtoJDyBVHQUHBzNw08OCffgbAmHHpOaNI1XQFRFRgFdBsynjn+YlgVDGNViUQWJGyChhktwt+lQNGEZkZjCSxWcihqN20CIwa8udHuxKWVRBC4X2LR0kGPjNcSOLDAoElIKuwMGMU5OK4GTans7l1QGEqFJ+FvCzIrJQPrtcxDmNbIXnnWciSC1KahzEeZ63pjgOLY3oKr66O/RYWyr5aknMlXhbHgmkgRRmzEgvHUYzfaXnnkC1bkqKuvoHpsXAaTcUCWSgkSyabl6KusH1YBF6TghNUCCkWK0tG873UdBWN04RDT6QJLyxRGEpwslhkFjKkXDufsxKLSRteWGgYaG102oxGY/N+EheZhSkZW09j0ejpEmZ0Oh0hRcxHKuIPHKKzkGNeii0jJ4nNR5aI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" height="170" width="300"> 
                <p data-v-841e3554="">无法使用代金券</p> 
                <p data-v-841e3554="">非客户端或客户端版本过低</p> 
                <router-link to="/Sload">
                    <div data-v-841e3554="" href="#/download" class="download_app">下载或升级客户端</div>
                </router-link>
            </section>
        </section>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.voucher_container{
    height: 15rem;
    padding-top: 0 0.3rem;
    background-color:  #f3f3f3;
}
.voucher_container ,.hongbao_detail{
    padding: 0;
    margin: 0;
    list-style: none;
    font-style: normal;
    text-decoration: none;
    border: none;
    color: #333;
    font-weight: 400;
    font-family: Microsoft Yahei;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
}
.voucher_header{
    width: 100%;
    height: 90px;
    background-color:  #f3f3f3;
     padding:0.4rem 0.3rem;
     box-sizing: border-box;
}
.voucher_header span{
    float:right;
    font-size:0.4rem;
    color:#3190e8;
}
.voucher_header span i{
    font-style: normal;
}
.voucher_header span a{
    width:0.45rem;
    height:0.45rem;
    display:inline-block;
    font-size:0.35rem;
    border-radius:50%;
    color:#fff;
    background:#3190e8;
    text-align:center;
    margin-right:0.08rem;
}
.unable_use{
    text-align: center;
    margin-top: 4rem;
}
.unable_use img{
    width: 4.2rem;
    height: 2.3rem;
}
.unable_use p:first-of-type {
    font-size: .45rem;
    color: #666;
    margin-top: .4rem;
}
.unable_use p:nth-of-type(2) {
    font-size: .3rem;
    color: #999;
    margin-top: .3rem;
    margin-bottom: .3rem;
}
.download_app{
    display: block;
    width: 4rem;
    height: 1rem;
    background-color: #56d176;
    font-size: .4rem;
    color: #fff;
    line-height: .5rem;
    padding: .3rem;
    border-radius: .15rem;
    box-sizing: border-box;
    margin-left:3rem; 
}
</style>