// import PostPreview from '../components/post-preview'

// export default function TwoSectionsGrid({ left, right }) {
export default function TwoSectionsGrid({ leftTitle, leftIcons, rightTitle, rightIcons }) {
    const titleClassName = "mb-8 text-3xl mdmd:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32:text-5xl font-bold tracking-tighter leading-tight";
    const sectionGridClassName = "grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32";
    const iconGridClassName = "inline-grid grid-cols-3 md:grid-cols-5 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32";
    return (
        <section>
            <h2 className={titleClassName}>
                技術スタック＆外部リンク
            </h2>
            <div className={sectionGridClassName}>
                <div className={iconGridClassName}>
                    {leftIcons}
                </div>
                <div className={iconGridClassName}>
                    {rightIcons}
                </div>
            </div>
        </section>
    )
}

