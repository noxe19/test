//установил высоту для 'main'
let main = $('.main')
let mainHeight = main.css('height')
main.css({'height': mainHeight.split('px').shift() - 170 + 'px'})

let btn1 = $('.btn1')
let btn2 = $('.btn2')
let btn3 = $('.btn3')

let  main1 = $('.main1')
let  main2 = $('.main2')
let  main3 = $('.main3')

btn1.on('click', function(){
    main1.css({'display': 'block'})
    main2.css({'display': 'none'})
    main3.css({'display': 'none'})
    btn1.addClass('backLight')
    btn2.removeClass('backLight')
    btn3.removeClass('backLight')
})

btn2.on('click', function(){
    main1.css({'display': 'none'})
    main2.css({'display': 'block'})
    main3.css({'display': 'none'})
    btn2.addClass('backLight')
    btn1.removeClass('backLight')
    btn3.removeClass('backLight')
})

btn3.on('click', function(){
    main1.css({'display': 'none'})
    main2.css({'display': 'none'})
    main3.css({'display': 'block'})
    btn3.addClass('backLight')
    btn1.removeClass('backLight')
    btn2.removeClass('backLight')
})