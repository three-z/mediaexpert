({
	block: 'template-page',
	title: 'Оформить заявку',
	content: [
		{
			block: 'content',
			content: [
				{
					block: 'breadcrumbs',
					content: [
						{
							elem: 'layout',
							mods: { 'container': true },
							mix: { block: 'container' },
							content: [
								{
									elem: 'list',
									content: [
										{
											elem: 'item',
											content: [
												{
													tag: 'a',
													elem: 'link',
													attrs: { href: '#' },
													content: 'Главная'
												},
											]
										},
										{
											elem: 'item',
											content: [
												{
													tag: 'a',
													elem: 'link',
													attrs: { href: '#' },
													content: 'Реклама на телевидении'
												},
											]
										},
										{
											elem: 'item',
											content: [
												{
													tag: 'a',
													elem: 'link',
													attrs: { href: '#' },
													content: 'Первый'
												},
											]
										}
									]
								}
							]
						}
					]
				},
				{
					block: 'on-tv-item',
					content: [
						{
							elem: 'layout',
							mods: { 'container': true },
							mix: { block: 'container' },
							content: [
								{
									elem: 'title',
									cls: 'js-gradient',
									content: 'Оформить заявку'
								},
								{
									elem: 'content',
									content: [
										{
											block: 'request-form',
											content: [
												{
													tag: 'form',
													elem: 'form',
													content: [
														{
															tag: 'input',
															elem: 'input',
															attrs: { type: 'text', placeholder: 'Ваше имя' }
														},
														{
															tag: 'input',
															elem: 'input',
															attrs: { type: 'text', placeholder: 'Компания' }
														},
														{
															tag: 'input',
															elem: 'input',
															mods: { 'small': true },
															attrs: { type: 'text', placeholder: 'Телефон' }
														},
														{
															tag: 'input',
															elem: 'input',
															mods: { 'small': true },
															attrs: { type: 'text', placeholder: 'E-mail' }
														},
														{
															tag: 'input',
															elem: 'button',
															attrs: { type: 'submit', placeholder: 'Отправить' }
														}
													]
												}
											]
										},
										{
											elem: 'text',
											content: '<div class="on-tv-slider__item"><div class="on-tv-slider__thumb"><img class="on-tv-slider__image" src="img/tmp/on-tv/1.png" /></div><div class="on-tv-slider__title">реклама на телевидении</div><div class="on-tv-slider__sub-title">ПЕРВЫЙ</div></div>Открытое акционерное общество «Первый канал» — крупная российская государственная телекомпания. Обладает наибольшим охватом аудитории РФ (99,8 % населения).[6] Второй по возрасту телеканал СССР и России после петербургского Пятого канала. Вещает из Москвы, штаб-квартира находится в телецентре «Останкино», на улице Академика Королёва, 12. Позиционируется как главный телеканал страны. Помимо территории России, вещание Первого канала распространяется за пределы России. «Первый канал. Всемирная сеть» вещает по всему миру. В Казахстане вещает «Первый канал Евразия», в Армении — «TV1», а в Белоруссии — «ОНТ». <br><br><img src="img/tmp/on-tv-item/1.jpg" style="float: right; margin-left: 20px;" alt="">Первый канал ведёт свою историю от Первой программы ЦТ СССР, выходившей в эфир с 1951 года, и является старейшим массовым телеканалом в России. В конце 1991 года Центральное телевидение было заменено Телевидением «Останкино», и был основан 1-й канал Останкино, существовавший до 1995 года. 25 января 1995 года было основано ОРТ. 1 апреля 1995 года был образован «Первый канал», в то время называвшийся «Общественное российское телевидение» (ОРТ, до 1 сентября 2002 года). Первый канал заменил РГТРК «Останкино» 1 апреля 1995 года. Историческое название «Первый канал» было возвращено в 2002 году (хотя название ОРТ упоминается на канале и на его сайте вплоть до наших дней). 1 июня 2011 года канал перешёл на вещание в формате 16:9. <br><br>С 24 декабря 2012 года «Первый канал» также вещает в формате высокой чёткости HD. «Первый канал HD» полностью дублирует сетку вещания основного канала[8].'
										},
										{
											elem: 'back',
											content: [
												{
													tag: 'a',
													elem: 'back-link',
													attrs: { href: '#' },
													content: '← назад'
												}
											]
										}
									]
								}
							]
						}
					]
				}
			]
		}
	]
})