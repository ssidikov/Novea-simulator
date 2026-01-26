# Design System Documentation

## 📐 Структура дизайн-системы

### Design Tokens (`src/design-system/tokens.ts`)

Централизованное хранилище всех дизайн-токенов проекта.

#### Цвета

```typescript
colors.primary.dark // #0a253a - Основной фон
colors.primary.green // #67d39d - Акцентный зелёный
colors.primary.purple // #715aff - Акцентный фиолетовый
colors.primary.blue // #55c1ff - Акцентный синий
colors.white.opacity10 // rgba(255, 255, 255, 0.1)
```

#### Типографика

```typescript
typography.fonts.primary // 'Poppins', sans-serif
typography.fonts.secondary // 'DM Sans', sans-serif
typography.fontSize.base // 16px
typography.fontWeight.bold // 700
```

#### Spacing & Layout

```typescript
spacing.md // 16px
layout.maxWidth.content // 920px
layout.gap.section // 62px
```

## 🧩 UI Компоненты

### 1. PageLayout

Основной layout для всех страниц. Включает фоновые элементы и декорации.

```tsx
import { PageLayout, PageContainer, PageSection } from '@/components/ui'

;<PageLayout>
  <PageContainer>
    <PageSection>{/* Ваш контент */}</PageSection>
  </PageContainer>
</PageLayout>
```

### 2. PageHeader

Заголовок страницы с тегом и описанием.

```tsx
import { PageHeader } from '@/components/ui'

;<PageHeader
  tag='Configuration'
  title={
    <>
      Qui souhaitez-vous <span className='text-[#67d29d]'>couvrir</span> ?
    </>
  }
  description='Choisissez le type de couverture santé...'
/>
```

### 3. BackButton

Кнопка возврата на предыдущую страницу.

```tsx
import { BackButton } from '@/components/ui'

<BackButton />
// или с кастомным обработчиком
<BackButton onBack={() => router.push('/')} />
```

### 4. Tag

Компонент для отображения меток.

```tsx
import { Tag } from '@/components/ui'

;<Tag>Configuration</Tag>
```

### 5. OptionButton

Универсальная кнопка выбора опции с иконкой.

```tsx
import { OptionButton, OptionGrid } from '@/components/ui'

;<OptionGrid>
  <OptionButton
    icon={<BriefcaseIcon className='text-white/60' />}
    title='Fondateur, Dirigeant'
    description="Contrats spécifiques pour chefs d'entreprise"
    onClick={() => handleSelect('dirigeant')}
    variant='hover-white'
  />
</OptionGrid>
```

**Варианты:**

- `default` - Простой hover эффект
- `hover-white` - Белый фон при hover (по умолчанию)
- `hover-subtle` - Subtle hover эффект

### 6. OptionGrid / OptionList

Контейнеры для размещения OptionButton.

```tsx
// Сетка 2 колонки (мобильный: 1 колонка)
<OptionGrid>
  {options.map(option => <OptionButton key={option.id} {...option} />)}
</OptionGrid>

// Вертикальный список
<OptionList>
  {options.map(option => <OptionButton key={option.id} {...option} />)}
</OptionList>
```

## 📝 Примеры использования

### Полная страница

```tsx
'use client'
import { useRouter } from 'next/navigation'
import {
  PageLayout,
  PageContainer,
  PageSection,
  PageHeader,
  BackButton,
  OptionGrid,
  OptionButton,
} from '@/components/ui'
import { BriefcaseIcon } from '@/components/Icons'

export default function MyPage() {
  const router = useRouter()

  return (
    <PageLayout>
      <BackButton />
      <PageContainer>
        <PageSection>
          <PageHeader tag='Configuration' title='Mon titre' description='Ma description' />

          <OptionGrid>
            <OptionButton
              icon={<BriefcaseIcon className='text-white/60' />}
              title='Option 1'
              description='Description'
              onClick={() => router.push('/next-page')}
            />
          </OptionGrid>
        </PageSection>
      </PageContainer>
    </PageLayout>
  )
}
```

## 🎨 Преимущества

✅ **Консистентность** - Единообразный дизайн на всех страницах
✅ **Переиспользуемость** - DRY принцип, минимум дублирования
✅ **Масштабируемость** - Легко добавлять новые страницы
✅ **Поддержка** - Изменения в одном месте применяются везде
✅ **TypeScript** - Полная типизация для безопасности
✅ **Performance** - Оптимизированные компоненты

## 🔄 Миграция существующих страниц

1. Импортируйте компоненты из `@/components/ui`
2. Замените дублирующийся код на компоненты
3. Используйте design tokens из `@/design-system/tokens`
4. Удалите локальные версии компонентов
