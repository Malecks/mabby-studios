const Projects = () => {
    const frankAndOakRoles = [
        'Brand strategy', 
        'Public relations',
        'Media & influencer partnerships',
        'Events',
        'Copywriting',
    ]

    const tiffanyRoles = [
        'Campaign strategy & execution',
        'Partnerships',
        'Public relations',
        'Events',
        'Influencer program',
        'Business development consulting',
    ]

    const rootsRoles = [
        'Brand strategy',
        'Campaign strategy & execution',
        'Partnerships',
        'Public relations',
        'Influencer program',
    ]

    return(
        <div className="projects">
            <section>
                <h2>Frank And Oak</h2>
                <h4>Project role</h4>
                <RolesList roles={frankAndOakRoles} />
                <h4>The situation</h4>
                <p>Frank And Oak, originally a tech-forward menswear brand, aimed to reposition to become Canada's destination for sustainable fashion. The brand needed to expand it's community beyond their French Canadian headquarters and establish credibility in the sustainable fashion industry.</p>
                <h4>The task</h4>
                <p>Distill the new brand identity as a values-driven company committed to sustainability, purpose, and community while introducing new product categories. Use engaging storytelling campaigns to share Frank And Oak's journey toward sustainability.</p>
                <h4>Results</h4>
                <p>Increased media coverage YOY from 2016 - 2020, with feature stories in WWD, ELLE Canada, and FASHION, attracting a high-quality North American audience. In 2019, Frank And Oak was recognized as Strategy Magazine's 'Brand of the Year' for their repositioning to a sustainable fashion destination.</p>
            </section>
            <hr />
            <section>
                <h2>Tiffany & Co.</h2>
                <h4>Project role</h4>
                <RolesList roles={tiffanyRoles} />
                <h4>The situation</h4>
                <p>Tiffany & Co., the global powerhouse, ruled American luxury but struggled to connect with Canadian consumers who overlooked the brand in favour of European luxury houses.</p>
                <h4>The task</h4>
                <p>Create brand relevance for Canadians through world-class storytelling, experiences, and market touchpoints. Build brand equity to take on a crowded market by communicating the history and modern edge of Tiffany & Co. to Canadian consumers.</p>
                <h4>Results</h4>
                <p>Tiffany & Co. consistently ranked as the top luxury brand in Canada, according to DMR metrics, with an increase in earned media coverage in four years running. Strategic partnerships and event activations contributed to growing the brand's presence in key markets such as Vancouver, Toronto, and Montreal, resulting in increased client acquisition.</p>
            </section>
            <hr />
            <section>
                <h2>Roots</h2>
                <h4>Project role</h4>
                <RolesList roles={rootsRoles} />
                <h4>The situation</h4>
                <p>Roots, an iconic Canadian brand representing camp culture and the great Canadian wilderness, faced fierce competition and needed to revitalize its brand after nearly 50 years in business.</p>
                <h4>The task</h4>
                <p>Quiet the noise of sales cycles, nostalgia motifs, and Canadiana, and refocus on the brand values of comfort and style. Drive the brand's fashion relevance by bringing Roots into a city setting.</p>
                <h4>Results</h4>
                <p>Compelling campaigns captured the attention of media and consumers, re-igniting the Roots Canadian love story and driving increased engagement. Partnerships with professional athletes and global talent drove rapid collection sell-through on capsule collections and media coverage across digital, print, and broadcast media.</p>
            </section>
        </div>
    )
}

const RolesList = ({ roles }) => {
    return (
      <ul className="roles-list">
        {roles.map((role, index) => (
          <li key={index}>{role}</li>
        ))}
      </ul>
    )
}

export default Projects