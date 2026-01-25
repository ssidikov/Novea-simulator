# 🎨 Система единого дизайна - Краткое руководство

## ✅ Реализовано

### Единый дизайн для всех страниц
- ✅ **Одинаковый фон**: `#0a253a` с декоративными блюрами (зеленый и синий)
- ✅ **Центрированный контент**: Все элементы по центру с `max-w-[920px]`
- ✅ **Адаптивный дизайн**: Точки останова mobile/tablet/desktop
- ✅ **Адаптивные тексты**: Responsive размеры шрифтов (text-3xl → sm:text-4xl → lg:text-[56px])
- ✅ **Адаптивные иконки**: Размеры 20x20 → sm:24x24

### Компоненты

#### 1. PageLayout
Универсальная обертка для всех страниц:
```tsx
import PageLayout from '@/components/PageLayout'

<PageLayout showBackButton onBack={() => router.back()}>
  {/* Ваш контент */}
</PageLayout>
```

#### 2. PageHeader
Заголовок с тегом и описанием:
```tsx
import PageHeader from '@/components/PageHeader'

<PageHeader
  tag="Configuration"
  title={<>Ваш <span className='text-[#67d29d]'>вопрос</span>?</>}
  description="Опциональное описание"
/>
```

#### 3. OptionCard
Универсальная карточка выбора:
```tsx
import OptionCard from '@/components/OptionCard'

<OptionCard
  icon={<UsersIcon />}
  title="Заголовок"
  description="Описание"
  onClick={handleClick}
/>
```

### Структура страницы

```tsx
'use client'
import { useRouter } from 'next/navigation'
import PageLayout from '@/components/PageLayout'
import PageHeader from '@/components/PageHeader'
import OptionCard from '@/components/OptionCard'
import { UsersIcon } from '@/components/Icons'

export default function MyPage() {
  const router = useRouter()

  return (
    <PageLayout showBackButton onBack={() => router.back()}>
      <div className='flex w-full flex-col items-center gap-10 sm:gap-12 lg:gap-[62px]'>
        {/* Заголовок */}
        <PageHeader
          tag="Configuration"
          title={<>Ваш <span className='text-[#67d29d]'>вопрос</span>?</>}
          description="Описание вопроса"
        />
        
        {/* Карточки */}
        <div className='flex w-full flex-col items-center gap-3'>
          <OptionCard
            icon={<UsersIcon />}
            title="Вариант 1"
            description="Описание 1"
            onClick={() => handleSelect('option1')}
          />
        </div>
      </div>
    </PageLayout>
  )
}
```

## 📱 Адаптивность

### Точки останова
- **Mobile** (< 640px): базовые размеры
- **Tablet** (640px - 1024px): средние размеры
- **Desktop** (> 1024px): полные размеры

### Адаптивные классы

#### Отступы
```tsx
px-4 sm:px-8 lg:px-[149px]    // Горизонтальные
py-20 sm:py-28 lg:py-[149px]  // Вертикальные
gap-5 sm:gap-10 lg:gap-[62px] // Между элементами
```

#### Тексты
```tsx
text-3xl sm:text-4xl lg:text-[56px]                   // Заголовки
text-sm sm:text-base                                   // Описания
text-xs sm:text-sm                                     // Подзаголовки
leading-tight sm:leading-[60px] lg:leading-[70px]     // Высота строки
```

#### Иконки
```tsx
h-5 w-5 sm:h-6 sm:w-6         // В интерфейсе
h-10 w-10 sm:h-12 sm:w-12     // В карточках
```

## 🎨 Цвета

```css
Фон:            #0a253a
Текст:          #ffffff
Акцент зеленый: #67d29d
Акцент синий:   #55c1ff
Hover фиолетовый: #715aff
```

## 🔄 Обновленные страницы

1. ✅ `/` (page.tsx) - Главная страница
2. ✅ `/coverage-type` - Тип покрытия
3. ✅ `/company-status` - Статус компании
4. ✅ `/salary-employees/count` - Количество сотрудников

Все страницы теперь используют:
- Единый фон с декорациями
- Центрированный контент
- Адаптивные размеры
- Универсальные компоненты

## 📖 Полная документация

См. [DESIGN-SYSTEM.md](./DESIGN-SYSTEM.md) для подробной документации.
