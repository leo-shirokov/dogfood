import * as echarts from 'echarts'
import { useEffect, useMemo } from 'react'
import { useGetAllProductsQuery } from '../../store/products/products.api'

function Chart() {
	const { data } = useGetAllProductsQuery()

	const chartData = useMemo(() => {
		const likes = data?.map((e) => e?.likes?.length)
		const reviews = data?.map((e) => e?.reviews?.length)
		const saleTag = data?.map((e) =>
			e?.tags?.reduce(
				(acc, value) => (acc + (value === 'sale') ? 1 : 0),
				0
			)
		)
		const newTag = data?.map((e) =>
			e?.tags?.reduce(
				(acc, value) => (acc + (value === 'new') ? 1 : 0),
				0
			)
		)

		return {
			likes,
			reviews,
			saleTag,
			newTag,
		}
	}, [data])

	useEffect(() => {
		const option = {
			title: {
				text: 'Аналитика по товарам',
				subtext:
					'количество лайков, количество отзывов, теги sale и new',
				left: 'center',
			},
			tooltip: {
				trigger: 'item',
			},
			legend: {
				orient: 'vertical',
				left: 'left',
				top: 'bottom',
			},
			series: [
				{
					name: 'Продукты',
					type: 'pie',
					radius: '50%',
					data: [
						{ value: chartData.likes, name: 'Лайки' },
						{ value: chartData.reviews, name: 'Отзывы' },
						{ value: chartData.saleTag, name: 'Sale' },
						{ value: chartData.newTag, name: 'New' },
					],
					emphasis: {
						itemStyle: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)',
						},
					},
				},
			],
		}

		const chartId = document.getElementById('chartId')
		if (chartId === null) {
			return
		}
		echarts.dispose(chartId)
		const pieChart = echarts.init(chartId)
		option && pieChart.setOption(option)
	}, [chartData])

	return (
		<div id='chartId' className='h-[30rem] w-[30rem] md:h-96 md:w-96'></div>
	)
}

export default Chart
